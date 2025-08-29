
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 48 },
  { name: "Diana", score: 90 },
  { name: "Edward", score: 60 },
  { name: "Fah", score: 30 }
];

function filterPassedStudents(minScore) {
  students.forEach((student) => {
    if (student.score >= minScore) {
      console.log(`Student ${student.name} passed with score ${student.score}`);
    }
  });
}

filterPassedStudents(60);
