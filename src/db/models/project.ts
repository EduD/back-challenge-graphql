import { Model } from 'sequelize';

interface ProjectAttributes {
  name: string,
  price: number,
  userId: number
}

function Project(sequelize:any, dataTypes:any) {
  class Project extends Model<ProjectAttributes> implements ProjectAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    name!: string;
    price!: number;
    userId!: number;
  };
  Project.init({
    name: {type:dataTypes.STRING,allowNull: false},
    price: {type:dataTypes.DECIMAL(10,2), allowNull: false},
    userId: {type:dataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};

module.exports = Project;
export default Project;