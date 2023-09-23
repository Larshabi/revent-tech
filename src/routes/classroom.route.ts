import { Router } from "express";
import ClassroomController from "../controllers/classroom.controller";
import { AsyncHandler } from "../utils/AsyncHandler";

const ClassroomRoute: Router = Router();
ClassroomRoute.post("/", AsyncHandler(ClassroomController.create));
ClassroomRoute.get("/:classId", AsyncHandler(ClassroomController.get));

export default ClassroomRoute;
