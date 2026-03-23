const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const petModel = sequelize.define('pet', {
    pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    web_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'web_user',
            key: 'web_user_id'
        }
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    pet_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pet_type',
            key: 'pet_type_id'
        }
    }
}, {
    tableName: 'pet',
    timestamps: false
});

module.exports = petModel;