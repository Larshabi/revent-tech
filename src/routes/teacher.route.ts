import { Router } from "express";
import TeacherController from "../controllers/teacher.controller";
import { AsyncHandler } from "../utils/AsyncHandler";

const TeacherRoute: Router = Router();
TeacherRoute.post("/", AsyncHandler(TeacherController.create));
TeacherRoute.get(
  "/list-teachers",
  AsyncHandler(TeacherController.listTeachers)
);
TeacherRoute.get("/:teacherId", AsyncHandler(TeacherController.get));
TeacherRoute.get(
  "/students/:teacherId",
  AsyncHandler(TeacherController.getStudents)
);

export default TeacherRoute;
