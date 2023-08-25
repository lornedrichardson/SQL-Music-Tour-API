'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [{
      name: 'Golden Earring',
      genre: 'Rock',
      available_start_time: '21:00:00',
      end_time: '23:00:00'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
}