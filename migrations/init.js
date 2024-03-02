/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// departments Table:
// {   <FormInput type="text" label="College_id:" disabled={show === "show"} />
{/* <FormInput type="text" label="College_name:" disabled={show === "show"} />
<FormInput type="text" label="Unevirsity_id" disabled={show === "show"} />
<FormInput type="text" label="Creted_at:" disabled={show === "show"} />
<FormInput type="text" label="Updated_at:" disabled={show === "show"} />} */}



export function up(knex) {
    knex.schema.createTable('courses', (table) => {
        table.increments('id');
        table.string('code').notNullable();
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
    });

    knex.schema.createTable('teachers', (table) => {
        table.increments('id');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('phone_number').notNullable();
        table.string('note').notNullable();
        table.timestamps(true, true);
    });

    knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('edge').notNullable();
        table.enu('gender', ['m', 'f']).defaultTo('m');
        table.string('note').notNullable();
        table.timestamps(true, true);
    });

    knex.schema.createTable('departments', (table) => {
        table.increments('id');
        table.string('department_name').notNullable();
        table.integer('college_id').notNullable();
        table.timestamps(true, true);
    });

    knex.schema.createTable('colleges', (table) => {
        table.increments('id');
        table.string('college_name').notNullable();
        table.timestamps(true, true);
    });



}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {

}
