'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Supportcategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      supportId: {
         type: Sequelize.INTEGER,
         onDelete: "CASCADE",
         allowNull: false,
         references: {
           model: "Supports",
           key: "id",
           as: "supportId"
         },
       }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Supportcategories');
  }
};
