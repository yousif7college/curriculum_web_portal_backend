const env = process.env;

const dbConfig = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME || 'yousif_test',
  port: env.DB_PORT || 3306,
};

const tableConfig = {
  PAGE_SIZE: 10,
};

export { dbConfig as default, tableConfig };
