const { DataTypes } = require("sequelize");


module.exports=(sequelize) =>{

    sequelize.define('Food',{
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
        },
        image_id: {
            type:DataTypes.TEXT,
        },
    },{timestamps:false})
}