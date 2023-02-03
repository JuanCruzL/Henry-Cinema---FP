const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Movie', {
    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },

    apiId: {
        type: DataTypes.INTEGER,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    voteAverage: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },

    overview: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    review: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },

    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    productionCompanies: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },

    runtime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    origin: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    genres:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },

    directors: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    actors: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    video: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    classification:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    Distributor: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  });
};