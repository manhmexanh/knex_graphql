
exports.up = function(knex, Promise) {
  return knex.schema.createTable('persons',function (table){
    table.increments('id').primary();
    table.string('name');
    table.string('age');
    table.string('gender');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('persons')
};
