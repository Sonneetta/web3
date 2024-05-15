import Sequelize from 'sequelize';
import tableFn from './table.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite3',
});

const table = tableFn(sequelize);

export { sequelize, table };
