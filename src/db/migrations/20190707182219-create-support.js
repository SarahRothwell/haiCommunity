'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Supports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      website: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      postalcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      /*
      userId: {
         type: Sequelize.INTEGER,
         onDelete: "CASCADE",
         allowNull: false,
         references: {
           model: "Users",
           key: "id",
           as: "userId"
         },
       }
       */

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Supports');
  }
};
