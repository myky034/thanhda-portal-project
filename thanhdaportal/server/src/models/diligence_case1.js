'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Diligence_Case1 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Diligence_Case1.belongsTo(models.Diligence)
        }
    }
    Diligence_Case1.init({
        diligence_id: DataTypes.STRING,
        is_reason: DataTypes.BOOLEAN,
        date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Diligence_Case1',
    });
    return Diligence_Case1;
};