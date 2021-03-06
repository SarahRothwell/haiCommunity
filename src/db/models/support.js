'use strict';
module.exports = (sequelize, DataTypes) => {
  var Support = sequelize.define('Support', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Support.associate = function(models) {

/*
    Support.belongsTo(models.User, {
    foreignKey: "userId",
    });
*/
    Support.hasMany(models.Supportcategory, {
      foreignKey: "SupportcategoryId",
      as: "Supportcategories"
    });

  };
  return Support;
};
