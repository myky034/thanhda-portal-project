'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Semester extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Semester.belongsTo(models.School_Year_Summary)
            Semester.hasOne(models.Study, { foreignKey: "semester_id" })
            Semester.hasMany(models.Discipline, { foreignKey: "semester_id" })
            Semester.hasMany(models.Diligence, { foreignKey: "semester_id" })

        }
    }
    Semester.init({
        school_year_summary_id: DataTypes.STRING,
        semester_name: DataTypes.STRING,
        discipline_point: DataTypes.DECIMAL,
        discipline_classification: DataTypes.STRING,
        diligence: DataTypes.DECIMAL,
        academic_average: DataTypes.DECIMAL,
        average_score_result: DataTypes.DECIMAL,
        result_of_classification: DataTypes.STRING,
        evaluate: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Semester',
    });
    return Semester;
};