const { DataTypes } = require("sequelize");

module.exports=(sequelize) =>{

    sequelize.define('drink',{
        id:{
            type:DataTypes.UUIDV4,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        image: {
            type:DataTypes.TEXT,
            allowNull:false
        }
    })
}