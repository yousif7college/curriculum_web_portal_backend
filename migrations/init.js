/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


export function up(knex) {


    //  return a Promise.all() of calls

    return Promise.all([

        knex.schema.createTableIfNotExists('colleges', (table) => {
            table.increments('id').primary();
            table.string('college_name').notNullable();
            table.timestamps(true, true);
        }),

        knex.schema.createTableIfNotExists('departments', (table) => {
            table.increments('id');
            table.string('department_name').notNullable();
            table.integer('college_id').unsigned().notNullable().index().references('id').inTable('colleges');
            table.timestamps(true, true);
        }),

        knex.schema.createTableIfNotExists('courses', (table) => {
            table.increments('id').primary();
            table.string('code').notNullable();
            table.integer('department_id').unsigned().notNullable().index().references('id').inTable('departments');
            table.enu('type', ['practical', 'theoretical']).defaultTo('theoretical');
            table.enu('stage', [1, 2, 3, 4, 5]).defaultTo(1);
            table.integer('units').notNullable();
            table.integer('duration_weeks').notNullable();
            table.string('title_english').notNullable();
            table.string('title_arabic').notNullable();
            table.string('language').notNullable();
            table.integer('year_of_study').notNullable();
            table.integer('practical_marks').notNullable();
            table.integer('theoretical_marks').notNullable();
            table.string('coordinator_name').notNullable();
            table.string('office_hours').notNullable();
            table.string('schedule').notNullable();
            table.string('lecture_room').notNullable();
            table.string('virtual_classroom').notNullable();
            table.string('note').notNullable();
            table.timestamps(true, true);
        }),

        knex.schema.createTableIfNotExists('teachers', (table) => {
            table.increments('id');
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('email').notNullable();
            table.string('phone_number').notNullable();
            table.string('note').notNullable();
            table.timestamps(true, true);
        }),

        knex.schema.createTableIfNotExists('users', (table) => {
            table.increments('id');
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.string('age').notNullable();
            table.enu('gender', ['m', 'f']).defaultTo('m');
            table.string('note').notNullable();
            table.timestamps(true, true);
        }),

        knex.schema.createTableIfNotExists('courses_teachers', (table) => {
            table.integer('course_id').unsigned().notNullable().index().references('id').inTable('courses');
            table.integer('teacher_id').unsigned().notNullable().index().references('id').inTable('teachers');
            table.timestamps(true, true);
        }),

    ]);

}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {

    return Promise.all([
        knex.schema.dropTableIfExists('courses'),
        knex.schema.dropTableIfExists('departments'),
        knex.schema.dropTableIfExists('colleges'),
        knex.schema.dropTableIfExists('teachers'),
        knex.schema.dropTableIfExists('users'),
        knex.schema.dropTableIfExists('courses_teachers'),
    ]);

}