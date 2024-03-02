// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import dbConfig from './src/configs/db.config.js';

export const development = {
  client: 'mysql2',
  connection: {
    database: dbConfig.database,
    user: dbConfig.user,
    password: dbConfig.password,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
export const staging = {
  client: 'mysql2',
  connection: {
    database: dbConfig.database,
    user: dbConfig.user,
    password: dbConfig.password,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
export const production = {
  client: 'mysql2',
  connection: {
    database: dbConfig.database,
    user: dbConfig.user,
    password: dbConfig.password,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
