This is a simple School Web API designed to manage data for teachers, classrooms, and students.
Getting Started
Follow these steps to set up and run the School Web API:
1. Install Dependencies:
    Navigate to the project folder and install the required dependencies using npm or yarn with the command below.
    npm install
2. Start the application:
    Start the application with the command below.
    npm run dev
3. Use the API:
    Access the API endpoints using a tool like Postman or your web browser.
    Use the provided endpoints to create and read teachers, classrooms, and students.

API Endpoints
The following API endpoints are available:


TEACHER
Create Teacher:
POST /api/teacher

Get All Students under a Teacher:
GET /api/teacher/students/:teacherId

Get A teacher's details:
GET /api/teacher/:teacherId

Get All teachers:
GET /api/teacher/list-teachers


CLASSROOM
Create Classroom:
POST /api/classroom

Get Classroom:
GET /api/classroom/:classId

STUDENT
Create Student:
POST /api/student

Get Teacher assigned to a Student:
GET /api/student/teacher/:studentId

Get a Student details:
GET /api/student/:studentId

Get list of students:
GET /api/student