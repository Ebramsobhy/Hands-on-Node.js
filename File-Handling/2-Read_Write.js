const fs = require('fs');
const INPUT_FILE = 'student_grades.json';
const OUTPUT_FILE = 'student_results.json';

function readStudentData() {
  return fs.promises.readFile(INPUT_FILE, 'utf-8');
}

function writeUpdatedStudentData(result) {
  return fs.promises.writeFile(OUTPUT_FILE, result, 'utf-8');
}

async function processStudentGrades() {
  try {
    const data = await readStudentData();
    const students = JSON.parse(data);

    const updatedStudents = students.map(student => {
      const grades = Object.values(student.grades);
      const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
      const status = avg >= 50 ? 'Pass' : 'Fail';
      return { ...student, average: avg.toFixed(2), status };
    });

    const result = JSON.stringify(updatedStudents, null, 2);
    await writeUpdatedStudentData(result);

    console.log('Student results saved successfully to student_results.json');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

processStudentGrades();