
exports.up = function(knex) {
  return knex.schema.createTable('blog', (table) => {

    table.string('title', 254).notNullable()
    table.string('author', 80).notNullable().unique()
    table.json('posts')
    table.integer('id').unsigned().notNullable().unique()
    table.integer('createdAt').unsigned().notNullable()
    table.integer('updatedAt').unsigned().notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable( 'blog')
};
