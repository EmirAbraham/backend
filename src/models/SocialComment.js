const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('socialcomment', {
    id: {
      type: DataTypes.UUID, // para generar un id aleatorio unico.
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT(1500),
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  },
  {timestamps:false});
};
