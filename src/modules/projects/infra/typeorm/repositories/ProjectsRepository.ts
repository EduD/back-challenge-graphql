import { getRepository, Repository, Like } from 'typeorm';

import IProjectRepository from '@modules/projects/repositories/IProjectRepository';
import ICreateProjectDTO from '@modules/projects/dtos/ICreateProjectDTO';

import User from '@modules/users/infra/typeorm/entities/User';
import ProjectInputByName from '@modules/projects/graphql/input/ProjectInputByName';
import Project from '../entities/Project';

export default class ProjectsRepository implements IProjectRepository {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  async findAll({
    name = '',
    limit = 10,
    page = 0,
  }: ProjectInputByName): Promise<Project[]> {
    const projects = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
      take: limit,
      skip: page,
      relations: ['user'],
    });

    return projects;
  }

  async findById(id: number): Promise<Project> {
    const project = await this.ormRepository.findOne(id, {
      relations: ['user'],
    });

    if (!project) {
      throw new Error('Project not found.');
    }

    return project;
  }

  //  deepcode ignore member-access: ignore member access
  public async create({
    name,
    price,
    user_id: id,
  }: ICreateProjectDTO): Promise<Project> {
    const existProject = await this.ormRepository.findOne({ where: { name } });

    if (existProject) {
      throw new Error('Project already exists.');
    }

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ where: { id } });

    const project = this.ormRepository.create({
      name,
      price,
      user,
    });

    await this.ormRepository.save(project);

    return project;
  }
}
