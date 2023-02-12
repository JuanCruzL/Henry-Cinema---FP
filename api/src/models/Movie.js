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
        allowNull: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    imageVertical: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
    imageHorizontal: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    voteAverage: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },

    overview: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    review: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    productionCompanies: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },

    runtime: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    originalLanguage: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    genres:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
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
        allowNull: false,
    },

    distributor: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  });
};