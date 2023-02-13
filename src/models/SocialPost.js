const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('socialpost', {
    id: {
      type: DataTypes.UUID, // para generar un id aleatorio unico.
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT(1500),
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
};