import { Request, Response } from "express";
import Classroom from "../database/Classroom.model";

const ClassroomController = {
  async create(req: Request, res: Response) {
    const { name, teacherId } = req.body;
    if (!name) {
      return res.status(400).json({
        status: "error",
        message: "Name of classroom is required",
      });
    }
    let classroom = await Classroom.findOne({where:{name}})
    if(classroom){
      return res.status(400).json({
        message:'Class with name already exists'
      })
    }
    classroom = await Classroom.create({
      name,
      teacherId,
    });
    return res.status(201).json({
      classroom,
    });
  },

  async get(req: Request, res: Response) {
    const { classId } = req.params;
    if (!classId)
      return res.status(400).json({
        message: "Class id is required",
      });
    const classroom = await Classroom.findByPk(classId);
    return res.status(200).json({ classroom });
  },
};

export default ClassroomController;
