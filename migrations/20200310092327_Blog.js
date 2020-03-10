
exports.up = function(knex) {
  return knex.schema.createTable('blog', (table) => {
    table.increments();
    table.string('title', 254).notNullable()
    table.string('author', 80).notNullable().unique()

    table.json('posts').notNullable()
    table.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable( 'blog')
};
