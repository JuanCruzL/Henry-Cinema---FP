const { DataTypes } = require('sequelize');
//const { v4: uuidv4 } = require('uuid');

module.exports= (sequelize) =>{
    sequelize.define('Review',{
        id : {
            type: DataTypes.UUID,
            //autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
        },
        review:{
            type: DataTypes.TEXT,
            allowNull:false,
        },
    },
    {
    timestamps: true
  });
}