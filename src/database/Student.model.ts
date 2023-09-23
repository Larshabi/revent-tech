import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from ".";


 const Student = sequelize.define('Student',{
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})


export default Student;
