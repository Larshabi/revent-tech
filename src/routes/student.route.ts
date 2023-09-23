import { Router } from "express";
import StudentController from "../controllers/student.controller";
import { AsyncHandler } from "../utils/AsyncHandler";

const StudentRoute:Router = Router();

StudentRoute.post('/', AsyncHandler(StudentController.create));
StudentRoute.get('/studentId', AsyncHandler(StudentController.get));
StudentRoute.get('/teacher/:studentId', AsyncHandler(StudentController.getTeacher));
StudentRoute.get('/', AsyncHandler(StudentController.list));


export default StudentRoute;