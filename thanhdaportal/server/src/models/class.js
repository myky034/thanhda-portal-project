'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Class extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Class.belongsTo(models.Grade)
            Class.belongsToMany(models.User, { through: models.Teacher_Class })
            Class.hasMany(models.Teacher_Class)
        }
    }
    Class.init({
        class_name: DataTypes.STRING,
        grade_id: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Class',
    });
    return Class;
};