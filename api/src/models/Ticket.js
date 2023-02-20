const { DataTypes } = require('sequelize');
//const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Ticket', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        reserved: {
            type: DataTypes.BOOLEAN,
        },
        ticket_contact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        movie_title: {
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.DATE,
        },
        amount: {
            type: DataTypes.INTEGER,
        }
    },
    {
    timestamps: true
  });
}