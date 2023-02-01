const { DataTypes } = require('sequelize');

module.exports= (sequelize) =>{
    sequelize.define('review',{
        id : {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false
        },
        score:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        commentary:{
            type: DataTypes.TEXT,
            allowNull:false,
        }
    })
}