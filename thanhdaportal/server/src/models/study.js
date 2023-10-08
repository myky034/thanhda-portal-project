'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Study extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Study.belongsTo(models.Semester)
        }
    }
    Study.init({
        semester_id: DataTypes.STRING,
        plus_point_1: DataTypes.DECIMAL,
        coefficient_1: DataTypes.DECIMAL,
        plus_point_2: DataTypes.DECIMAL,
        coefficient_2: DataTypes.DECIMAL,
        coefficient_3: DataTypes.DECIMAL,
        average_score_result: DataTypes.DECIMAL,
        evaluate: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Study',
    });
    return Study;
};