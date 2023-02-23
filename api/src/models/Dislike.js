const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Dislike",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      movieId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Movies",
          key: "id",
        },
      },
      User_Dislikes: {
        type: DataTypes.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      Movie_Dislikes: {
        type: DataTypes.UUID,
        references: {
          model: "Movies",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
    },
    { timestamps: false }
  );
};
