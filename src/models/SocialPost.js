const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('socialpost', {
        id: {
            type: DataTypes.UUID, // para generar un id aleatorio unico.
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(1500),
            allowNull: false,
        },
        likes: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            defaultValue: [],
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    });
};