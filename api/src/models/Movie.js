const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Auditorium', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    image: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actors: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classification:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Distributor: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
};