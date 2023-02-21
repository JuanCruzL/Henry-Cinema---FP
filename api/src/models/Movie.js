const { DataTypes, DATE } = require('sequelize');

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
    imageVertical_id: {
        type: DataTypes.TEXT,
    },
    imageHorizontal: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imageHorizontal_id: {
        type: DataTypes.TEXT,
    },

    voteAverage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    overview: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    productionCompanies: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    runtime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    originalLanguage: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    genres:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },

    directors: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    video: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    classification:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
    {
    timestamps: true
  });
};