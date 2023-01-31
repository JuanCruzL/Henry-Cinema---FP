const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // define the model
  sequelize.define('Screening', {
    
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
    screeningStart: {
        type: DataTypes.TIME,
        allowNull: false
    },
    classification: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
};
