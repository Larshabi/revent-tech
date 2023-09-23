import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from ".";
import Classroom from "./Classroom.model";
const Teacher = sequelize.define("Teacher", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
});

Teacher.hasMany(Classroom, { as: "classrooms", foreignKey: "teacherId" });
Classroom.belongsTo(Teacher, { foreignKey: "teacherId", as: "teacher" });

export default Teacher;
