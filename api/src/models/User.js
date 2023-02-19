const { DataTypes } = require("sequelize")
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
        },
        notifications:{
            type:DataTypes.BOOLEAN,
        },
        isAdministrator: {
            type: DataTypes.BOOLEAN,
        },
        image: {
            public_id: {
                type: DataTypes.TEXT,
            },
            url: {
                type: DataTypes.STRING,
            }
        }
    },{timestamps:false})
}