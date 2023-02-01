const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ticket', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
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