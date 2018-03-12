const now = new Date()

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Technologies',
      [
        {
          title: 'Hapi.JS',
          summary: 'A rich framework for building applications and services',
          createdAt: now,
          updatedAt: now
        },
        {
          title: 'Node',
          summary: 'The Node.JS Framework',
          createdAt: now,
          updatedAt: now
        }
      ], {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Technologies', null, {})
}
