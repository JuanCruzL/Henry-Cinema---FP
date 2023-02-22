const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // define the model
  sequelize.define('Combo', {
    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    image_id: {
        type: DataTypes.TEXT,
    }
  },{timestamps:true});
};

