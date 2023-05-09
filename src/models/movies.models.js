const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Movies = db.define('movies', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(25), //default(255)
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    releaseDate: {
        field: 'release_date',
        type: DataTypes.DATEONLY,
        allowNull: false
    }

});

module.exports = Movies