import knex from './db.service.js';
import helper from '../utils/helper.util.js';
import { tableConfig as config } from '../configs/db.config.js';

async function gatAll(page = 1, tableName) {
  const rows = await knex(tableName)
    .select('*')
    .limit(config.PAGE_SIZE)
    .offset(helper.getOffset(page, config.PAGE_SIZE));

  const row = await knex(tableName).count('id as count').first();
  const total = row?.count || 0;

  return {
    data: rows,
    meta: {
      page,
      total: total,
      pageSize: config.PAGE_SIZE
    }
  };
}

async function create(row, tableName) {
  const result = await knex(tableName).insert(row);

  if (!result) {
    throw new Error(`Error in creating in ${tableName} table`);
  }

  return { message: `Created successfully in ${tableName} table` };
}

async function update(id, row, tableName) {
  const result = await knex(tableName)
    .where({ id })
    .update(row);

  if (!result) {
    throw new Error(`Error in updating in ${tableName} table`);
  }

  return { message: `Updated successfully in ${tableName} table` };
}

async function remove(id, tableName) {
  const result = await knex(tableName)
    .where({ id })
    .del();

  if (!result) {
    throw new Error(`Error in deleting in ${tableName} table`);
  }

  return { message: `Deleted successfully in ${tableName} table` };
}

export default {
  gatAll,
  create,
  update,
  remove
}
