const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{

    sequelize.define('user',{
        id : {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING, 
            allowNull: false
        }
    })
}