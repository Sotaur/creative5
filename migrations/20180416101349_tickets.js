exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('tickets', function(table) {
      table.integer('userID');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('tickets', function(table) {
      table.dropColumn('userID');
    }),
  ]);
};
