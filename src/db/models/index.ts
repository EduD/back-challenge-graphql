'use strict';

import sequelize from "@db/db";
import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename); //index.ts
const db:any = {};

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') > 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
export default db;
