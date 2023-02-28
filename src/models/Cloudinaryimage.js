const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('cloudinaryimage', {
    id: {
      type: DataTypes.UUID, // para generar un id aleatorio unico.
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    publicId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
