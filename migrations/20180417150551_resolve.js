exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('tickets', function(table) {
      table.varchar('resolved');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('tickets', function(table) {
      table.dropColumn('resolved');
    }),
  ]);
};
