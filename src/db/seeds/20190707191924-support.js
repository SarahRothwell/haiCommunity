'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Supports', [
      {
        name: 'Toronto General Hospital',
        description: 'Lorem ipsum dolor sit amet, orci semper libero eu sodales ut lectus',
        phone: '(555)-555-5555',
        website: 'www.uhn.ca',
        street: '200 Elizabeth St.',
        city: 'Toronto',
        postalcode: 'M5G2C4',
        country: 'Canada',
      //  userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quinte Health Care Belleville General Hospital',
        description: 'Lorem ipsum dolor sit amet, orci semper libero eu sodales ut lectus',
        phone: '(555)-555-5555',
        website: 'www.qhc.on.ca',
        street: '265 Dundas Street East',
        city: 'Belleville',
        postalcode: 'K8N5A9',
        country: 'Canada',
      //  userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Supports', null, {});
  }
};
