'use strict';
const {
    Model
} = require('sequelize');
const Class = require("./class")
const Teacher = require("./user")


module.exports = (sequelize, DataTypes) => {
    class Teacher_Class extends Model {

        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Teacher_Class.belongsTo(models.User)
            Teacher_Class.belongsTo(models.Class)
            Teacher_Class.hasMany(models.School_Year_Summary, { foreignKey: "teacher_class_id" })
        }
    }
    Teacher_Class.init({
        class_id: DataTypes.STRING,
        glv_id: DataTypes.STRING,
        school_year: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Teacher_Class',
    });
    return Teacher_Class;
};