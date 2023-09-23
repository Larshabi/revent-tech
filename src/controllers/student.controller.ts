import { Request, Response } from "express";
import Student from "../database/Student.model";
import Classroom from "../database/Classroom.model";

const StudentController = {
  async create(req: Request, res: Response) {
    const { name, classId } = req.body;
    const existingStudent = await Student.findOne({where:{name}})
    if(existingStudent){
        return res.status(400).json({
            message:'Student with name already exists'
        })
    }
    const student = await Student.create({ name, classId });
    res.status(201).json(student);
  },

  async get(req: Request, res: Response) {
    const id = req.params.studentId;
    if (!id) {
      return res.status(400).json({
        message: "Student Id is required",
      });
    }
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(400).json({
        message: `Student with ${id} not found`,
      });
    }
    return res.status(200).json({
      student,
    });
  },

  
  async list(req: Request, res: Response) {
    const students = await Student.findAll();
    return res.status(200).json({
      students,
    });
  },

  async getTeacher(req: Request, res: Response) {
    const student = await Student.findOne({
      where: {
        id: req.params.studentId,
      },
      include: ['classroom']
    });
    if(!student){
        return res.status(400).json('student not found')
    }
    const studentClassId = student.toJSON().classId
    const classroom = await Classroom.findByPk(studentClassId, {include: 'teacher'});
    return res.status(200).json({
        "message": `The teacher assigned to ${student.toJSON().name} is ${classroom?.toJSON().teacher.name}` 
    });
  },
};

export default StudentController;
