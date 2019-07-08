'use strict';
module.exports = (sequelize, DataTypes) => {
  var Supportcategory = sequelize.define('Supportcategory', {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Supportcategory.associate = function(models) {

    Supportcategory.belongsTo(models.Support, {
    foreignKey: "supportId",
    onDelete: "CASCADE"
    });


  };
  return Supportcategory;
};
