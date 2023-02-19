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
            type: DataTypes.TEXT,
            defaultValue: 'https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800063/21738698-hombre-foto-de-perfil-de-la-silueta-con-el-signo-de-interrogaci%C3%B3n-en-la-cabeza-vector.jpg'
        },
        activated:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: {
            type: DataTypes.DATE,
        }
    },{timestamps:false})
}