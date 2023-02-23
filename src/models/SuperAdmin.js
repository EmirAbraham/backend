const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('superadmin', {
    id: {
      type: DataTypes.UUID, // para generar un id aleatorio unico.
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "codeCuak"
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: process.env.GMAIL
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: process.env.GMAIL_PASSWORD
    },
  },
  {timestamps:false});
};