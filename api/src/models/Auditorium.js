const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // define the model
  sequelize.define('Auditorium', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
};

