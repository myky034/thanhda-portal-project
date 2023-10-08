'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Class, { through: models.Teacher_Class })
      User.hasMany(models.Teacher_Class)
      User.hasMany(models.School_Year_Summary, { foreignKey: "student_id" })
    }
  }
  User.init(
    {
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      birthday: DataTypes.STRING,
      city: DataTypes.STRING,
      baptism_day: DataTypes.STRING,
      baptism_place: DataTypes.STRING,
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      gender: DataTypes.STRING,
      image: DataTypes.STRING,
      role_id: DataTypes.STRING,
      holy_name: DataTypes.STRING,
      holy_name_father: DataTypes.STRING,
      father_name: DataTypes.STRING,
      holy_name_mother: DataTypes.STRING,
      mother_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};