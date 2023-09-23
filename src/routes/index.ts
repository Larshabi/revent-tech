import { Express } from "express";
import ClassroomRoute from "./classroom.route";
import TeacherRoute from "./teacher.route";
import StudentRoute from './student.route';

export const Routes = (app:Express)=>{
    app.use('/api/classroom', ClassroomRoute)
    app.use('/api/teacher', TeacherRoute)
    app.use('/api/student', StudentRoute)
}