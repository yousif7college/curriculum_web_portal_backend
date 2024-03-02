import dbConfig from '../configs/db.config.js';
import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: dbConfig
});

export default db
