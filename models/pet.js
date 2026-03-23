const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const userModel = include('models/web_user');

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

petModel.belongsTo(userModel , { as: 'owner', timestamps: false, foreignKey:
'web_user_id'});

userModel.hasMany(petModel , { as: 'pets', timestamps: false, foreignKey:
'web_user_id'});

module.exports = petModel;