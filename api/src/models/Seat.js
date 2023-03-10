const { DataTypes } = require("sequelize");
//const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  // define the model
  sequelize.define(
    "Seat",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      row: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reserved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      payed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
