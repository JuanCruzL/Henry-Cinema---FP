const { DataTypes } = require('sequelize');
//const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Reservation', {
        id: {
            type: DataTypes.UUID,
           //autoIncrement: true,
           defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        reserved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        reservation_contact: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
        },
        movie_: {
            type: DataTypes.INTEGER,
        }
    },
    {
    timestamps: true
  });
}