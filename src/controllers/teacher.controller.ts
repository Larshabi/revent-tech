import { Request, Response } from "express";
import Teacher from "../database/Teacher.model";
import Classroom from "../database/Classroom.model";
import Student from "../database/Student.model";

const TeacherController = {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "Teacher's name is required",
      });
    }
    let teacher = await Teacher.findOne({ where: { name } });
    if(teacher){
        return res.status(400).json({
            message:'Teacher with name already exists'
        })
    }
    teacher = await Teacher.create({ name });
    return res.status(201).json({
      message: "Teacher Created Successfully",
      teacher,
    });
  },

  async get(req: Request, res: Response) {
    const { teacherId } = req.params;
    if (!teacherId) {
      return res.status(400).json({
        message: "Teacher id is required",
      });
    }
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }
    return res.status(200).json({
      teacher,
    });
  },

  async listTeachers(req: Request, res: Response) {
    console.log("Hi");
    const teachers = await Teacher.findAll();
    return res.status(200).json({
      teachers,
    });
  },
  async getStudents(req: Request, res: Response) {
    const { teacherId } = req.params;
    let classrooms = await Classroom.findAll({ where: { teacherId } });
    let classIds = classrooms.map((classroom: any) => {
      let teacherClassroom = classroom.toJSON();
      return teacherClassroom.id;
    });
    let teacherStudents: any[] = [];
    await Promise.all(
      classIds.map(async (classId) => {
        const students = await Student.findAll({ where: { classId } });
        teacherStudents.push(...students);
      })
    );
    teacherStudents = teacherStudents.map((students) => {
      return students.toJSON().name;
    });
    return res.status(200).json({
      students: teacherStudents,
    });
  },
};

export default TeacherController;
