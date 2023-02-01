const { DataTypes } = require('sequelize');
//const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) =>{

    sequelize.define('User',{
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
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