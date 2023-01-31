const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  // define the model
  sequelize.define('Seat', {
    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      defaultValue: dataTypes.UUIDV4,
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

