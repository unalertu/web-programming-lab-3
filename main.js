import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
  calculateClassAverage,
  findTopStudent,
  filterStudents
} from "./analytics.js";

fetchStudents((rawStudents) => {
  const students = rawStudents.map(
    (student) => new Student(student.id, student.name, student.courses)
  );

  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");

  try {
    students[0].id = 999;
  } catch {}

  console.log(`Final ID: ${students[0].id} (Success: ID did not change)`);

  const classAverage = calculateClassAverage(students, 101);
  const topStudent = findTopStudent(students);
  const courseStudents = filterStudents(students, (student) =>
    student.courses.some((course) => course.courseId === 102)
  );

  console.log("--- Analytics Report ---");
  console.log(`Class Average for Course 101: ${classAverage.toFixed(2)}`);
  console.log(
    `Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`
  );
  console.log(
    `Students in Course 102: ${courseStudents.map((student) => student.name).join(", ")}`
  );
});
