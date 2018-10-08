
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        { name: 'rowValue1', age: '23', gender: 'male', created_at: knex.fn.now(), updated_at: knex.fn.now(), role_id: 4 },
        { name: 'rowValue2', age: '23', gender: 'male', created_at: knex.fn.now(), updated_at: knex.fn.now(), role_id: 5 },
        { name: 'rowValue3', age: '23', gender: 'male', created_at: knex.fn.now(), updated_at: knex.fn.now(), role_id: 6 }
      ]);
    });
};
