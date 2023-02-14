const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('userdev', {
    id: {
      type: DataTypes.UUID, // para generar un id aleatorio unico.
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    nickName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
    },
    image: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
  {timestamps:false});
};
