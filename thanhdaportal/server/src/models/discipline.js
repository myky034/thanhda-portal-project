'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Discipline extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Discipline.belongsTo(models.Semester)
        }
    }
    Discipline.init({
        semester_id: DataTypes.STRING,
        discipline: DataTypes.DECIMAL,
        reasons: DataTypes.STRING,
        date: DataTypes.DATE

    }, {
        sequelize,
        modelName: 'Discipline',
    });
    return Discipline;
};