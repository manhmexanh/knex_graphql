
exports.up = function(knex, Promise) {
  return  knex.schema.table('persons', function (table) {
        table.integer('role_id').unsigned()
        table.foreign('role_id').references('id').inTable('roles')
      })
};

exports.down = function(knex, Promise) {
  return  knex.schema.table('persons', function (table) {
        table.dropForeign('role_id')
      })
};
