const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // define the model
  sequelize.define('Seat', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    row: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  });
};

