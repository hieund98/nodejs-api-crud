'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ShippingFee extends Model {

    }

    ShippingFee.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        type: DataTypes.STRING,
        price: DataTypes.DECIMAL
    }, {
        sequelize,
        timestamps: false,
        tableName: 'shipping_costs',
        modelName: 'ShippingFee',
    });

    return ShippingFee;
};
