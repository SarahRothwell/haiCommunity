'use strict';
module.exports = (sequelize, DataTypes) => {
  var Supportcategories = sequelize.define('Supportcategories', {
    category: DataTypes.STRING
  }, {});
  Supportcategories.associate = function(models) {
    // associations can be defined here
  };
  return Supportcategories;
};