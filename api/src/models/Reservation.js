const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('reservation', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
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
    })
}