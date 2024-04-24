//advanced array objects and functions in javascript

const students = [
  {
    name: "Alice",
    assignments: [85, 92, 78],
    test: 88,
  },
  {
    name: "Bob",
    assignments: [90, 75, 82],
    test: 93,
  },
  {
    name: "Charlie",
    assignments: [87, 69, 91],
    test: 78,
  },
];

function calculateScore(students) {
  let totalAssignmentScores = 0;
  let numberOfStudents = students.length;

  let highest = {
    name: "",
    score: 0,
  };

  let lowest = {
    name: "",
    score: Infinity,
  };

  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let assignmentSum = student.assignments.reduce((a, b) => a + b, 0);
    let totalScore = assignmentSum + student.test;
    totalAssignmentScores += assignmentSum;

    if (totalScore > highest.score) {
      highest.name = student.name;
      highest.score = totalScore;
    }

    if (totalScore < lowest.score) {
      lowest.name = student.name;
      lowest.score = totalScore;
    }
  }

  const average =
    totalAssignmentScores / (numberOfStudents * students[0].assignments.length);

  return {
    average,
    highest: highest.name,
    lowest: lowest.name,
  };
}

const result = calculateScore(students);
console.log(result);
