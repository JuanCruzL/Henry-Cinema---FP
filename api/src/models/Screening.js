const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  // define the model
  sequelize.define('Screening', {
    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      defaultValue: UUIDV4,
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
