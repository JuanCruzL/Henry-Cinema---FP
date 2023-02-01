const { DataTypes, UUIDV4 } = require('sequelize');
//const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  // define the model
  sequelize.define('Screening', {
    
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
