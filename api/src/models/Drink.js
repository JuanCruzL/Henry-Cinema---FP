const { DataTypes } = require("sequelize");
//const { v4: uuidv4 } = require('uuid');

module.exports=(sequelize) =>{

    sequelize.define('Drink',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        image: {
            type:DataTypes.TEXT,
            allowNull:false
        }
    },{timestamps:false})
}