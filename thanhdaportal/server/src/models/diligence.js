'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Diligence extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Diligence.belongsTo(models.Semester)
            Diligence.hasMany(models.Diligence_Case1, { foreignKey: "diligence_id" })
            Diligence.hasMany(models.Diligence_Case2, { foreignKey: "diligence_id" })
        }
    }
    Diligence.init({
        semester_id: DataTypes.STRING,
        total_point: DataTypes.DECIMAL,

    }, {
        sequelize,
        modelName: 'Diligence',
    });
    return Diligence;
};