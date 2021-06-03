import { Project } from '@db-models/project';
import { User } from '@db-models/user';
import { Error } from 'sequelize';

const resolvers = {
  User: {
    projects: (parent: any, args: any, { db }, info: any) => db.Project.findAll({ where: { userId: parent.dataValues.id } })
  },
  Project: {
    user: (parent: any, args: any, { db }) => db.User.findByPk(parent.dataValues.userId)
  },
  Query: {
    projects: (parent: any, args: any, { db }) => db.Project.findAll(),
    projectsByUser: (parent: any, { userId }, { db }) => db.Project.findAll({ where: { userId: userId } }),
    projectsById: (parent: any, { id }, { db }) => db.Project.findAll({ where: { id: id } }),
    project: (parent: any, { id }, { db }) => db.Project.findByPk(id),
    users: (parent: any, args: any, { db }) => db.User.findAll(),
    usersById: (parent: any, { id }, { db }) => db.User.findAll({ where: { id: id } }),
    user: (parent: any, { id }, { db }) => db.User.findByPk(id)
  },
  Mutation: {
    createUser: async (parent: any, { name, email }, { db }):Promise<User> => await db.User.create({name: name, email: email}),
    updateUser: async (parent: any, { id, name, email }, { db }):Promise<number> => {
      let response = await db.User.update({ name: name, email: email }, { where: { id: id } });
      return parseInt(response);
    },
    deleteUser: (parent: any, { id }, { db }): Promise<number> => 
      db.User.destroy({
        where: {
          id: id
        }
      }),
    createProject: async (parent: any, { name, price, userId }, { db }): Promise<Project> => {
      try {
        return await db.Project.create({
          name: name,
          price: price,
          userId: userId
        });
      }
      catch (ex: any) {
        throw new Error(`Ocorreu um erro ao tentar incluir o projeto. Error: ${ex.message}`);
      }
    },
    updateProject: async (parent: any, { id, name, price }, { db }): Promise<number> => 
      parseInt(await db.Project.update({
        name: name,
        price: price
      },
        {
          where: {
            id: id
          }
        })),
    deleteProject: (parent: any, { id }, { db }):Promise<number> =>
      db.Project.destroy({
        where: {
          id: id
        }
      })
  }
};

export default resolvers;