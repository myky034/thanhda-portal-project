'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class School_Year_Summary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            School_Year_Summary.belongsTo(models.User)
            School_Year_Summary.belongsTo(models.Teacher_Class)
            School_Year_Summary.hasMany(models.Semester, { foreignKey: "school_year_summary_id" })
        }
    }
    School_Year_Summary.init({
        teacher_class_id: DataTypes.STRING,
        student_id: DataTypes.STRING,
        discipline_point: DataTypes.DECIMAL,
        discipline_classification: DataTypes.STRING,
        semester_average_1: DataTypes.DECIMAL,
        semester_average_2: DataTypes.DECIMAL,
        average_score_result: DataTypes.DECIMAL,
        result_of_classification: DataTypes.STRING,
        new_class: DataTypes.STRING,
        old_class: DataTypes.STRING,
        evaluate: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'School_Year_Summary',
    });
    return School_Year_Summary;
};