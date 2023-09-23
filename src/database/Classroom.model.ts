import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from ".";
import Student from "./Student.model";

const Classroom = sequelize.define("Classroom", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  },
});

Classroom.hasMany(Student, { as: "students" });
Student.belongsTo(Classroom, { as: "classroom", foreignKey: "classId" });

export default Classroom;
