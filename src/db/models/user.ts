import { DataType, Model } from 'sequelize';

interface UserAttributes {
  name: string,
  email: string,
  createdAt: string
}

module.exports = (sequelize: any, dataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    name!: string;
    email!: string;
    createdAt!: string;

    static associate(models: any) {
      User.hasMany(models.Project, {
        sourceKey: "id",
        foreignKey: "userId",
        as: "users-projects", 
      });
    }
  };
  User.init({
    name: {
      type: dataTypes.STRING(250),
      allowNull: false
    },
    email: {
      type: dataTypes.STRING(500),
      allowNull: false,
      unique: true
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW
    }
  }, {
    sequelize,
    modelName: 'User',
    indexes: [{ unique: true, fields: ['email'] }]
  });
  return User;
};
