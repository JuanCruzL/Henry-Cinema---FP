const { DataTypes } = require('sequelize');
//const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) =>{

    sequelize.define('User',{
        id : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING, 
            allowNull: true,
        },
        notifications:{
            type:DataTypes.BOOLEAN,
            allowNull:true,
        }
    },{timestamps:false})
}