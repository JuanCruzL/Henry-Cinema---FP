const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Dislike', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    movieId: {
        type: DataTypes.UUID,
        allowNull: false,
    }
  },
  {
    timestamps: false
  });
};