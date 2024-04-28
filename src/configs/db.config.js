import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'yousif_test',
  port: process.env.DB_PORT || 3306,
};

const tableConfig = {
  PAGE_SIZE: 50,
};

export { dbConfig as default, tableConfig };
