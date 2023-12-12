/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('book_tbl', function (table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.string('genre').notNullable();
        table.string('isbn').notNullable().unique();
    
});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('book_tbl');
};

