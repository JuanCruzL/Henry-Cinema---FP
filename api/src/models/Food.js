const { DataTypes } = require("sequelize");

module.exports=(sequelize) =>{

    sequelize.define('food',{
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