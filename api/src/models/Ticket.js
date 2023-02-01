const { DataTypes } = require('sequelize');
//const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        movie_: {
            type: DataTypes.INTEGER,
        }
    })
}