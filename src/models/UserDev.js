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
    password: {
      type: DataTypes.STRING,
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
    },
    description: {
      type: DataTypes.STRING(120)
    },
    about: {
      type: DataTypes.STRING(1500)
    },
    skills: {
      type: DataTypes.ARRAY(DataTypes.STRING(20))
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'dev'
    }
  },
  {timestamps:false});
};
