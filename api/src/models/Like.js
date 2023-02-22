const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Like', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    movieId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Movie',
          key: 'id'
        }
    }
  },
  {
    timestamps: false
  });
};