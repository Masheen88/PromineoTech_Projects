console.log("Grading Spreadsheet");

//add items to an array

let spreadSheetHeaders = [
  "External tool:Week 1: Javascript - Variables (Real)",
  "External tool:Week 1: Javascript - Operations (Real)",
  "External tool:Week 1: Quiz (Real)",
  "Assignment:Week 1: Research (Real)",
  "Assignment:Week 1: Career Services Assignment 1 - LinkedIn Setup (Real)",
  "Checklist:Week 1: LinkedIn Posts (Real)",
  "Checklist:Week 1: Class Attendance (Real)",
  "External tool:Week 2: Javascript - Conditionals (Real)",
  "External tool:Week 2: OpenClass-Boolean Operators (Real)",
  "External tool:Week 2: OpenClass - Loops (Real)",
  "Assignment:Week 2: Research (Real)",
  "Assignment:Week 2: Career Services Assignment 1.5 - Github Profile (Real)",
  "Checklist:Week 2: LinkedIn Posts (Real)",
  "Checklist:Week 2: Class Attendance (Real)",
  "Assignment:Week 3: Career Services Assignment 2 - Tell Me About Yourself (Real)",
  "Quiz:Week 3: Career Services Assignment 2 - Submission (Real)",
  "External tool:Week 3: OpenClass - Functions (Real)",
  "External tool:Week 3: OpenClass - Arrays (Real)",
  "Quiz:Week 3: Coding Assignment Submission (Real)",
  "Quiz:Week 3: Research Submission (Real)",
  "Assignment:Week 3: Lab (Real)",
  "Checklist:Week 3: LinkedIn Posts (Real)",
  "Checklist:Week 3: Class Attendance (Real)",
  "External tool:Week 4: OpenClass - Arrow Functions (Real)",
  "Quiz:Week 4: Quiz (Real)",
  "Assignment:Week 4: Research (Real)",
  "Checklist:Week 4: LinkedIn Posts (Real)",
  "Checklist:Week 4: Class Attendance (Real)",
  "Assignment:Week 5: Coding Assignment (Real)",
  "Assignment:Week 5: Career Services Assignment 3 - JavaScript Flash Cards (Real)",
  "Quiz:Week 5: Quiz (Real)",
  "Assignment:Week 5: Research (Real)",
  "Checklist:Week 5: LinkedIn Posts (Real)",
  "Checklist:Week 5: Class Attendance (Real)",
  "Assignment:Week 6: Final Coding Project (Real)",
  "Checklist:Week 6: LinkedIn Posts (Real)",
  "Checklist:Week 6: Class Attendance (Real)",
  "Assignment:Week 7: Research (Real)",
  "Checklist:Week 7: Class Attendance (Real)",
  "Checklist:Week 7: LinkedIn Posts (Real)",
  "Quiz:Week 7: Quiz (Real)",
  "Checklist:Week 8: LinkedIn Posts (Real)",
  "Quiz:Week 8: Quiz (Real)",
  "Checklist:Week 8: Class Attendance (Real)",
  "Quiz:Week 9: Quiz (Real)",
  "Checklist:Week 9: LinkedIn Posts (Real)",
  "Checklist:Week 9: Class Attendance (Real)",
  "Quiz:Week 10: Quiz (Real)",
  "Checklist:Week 10: LinkedIn Posts (Real)",
  "Checklist:Week 10: Class Attendance (Real)",
  "Assignment:Week 11: Coding Assignment (Real)",
  "Quiz:Week 11: Quiz (Real)",
  "Assignment:Week 11: Research (Real)",
  "Assignment:Week 11: Career Services Assignment 6 - Front End Flash Cards (Real)",
  "Checklist:Week 11: LinkedIn Posts (Real)",
  "Checklist:Week 11: Class Attendance (Real)",
  "Assignment:Week 16: Final Coding Project (Real)",
  "Checklist:Week 12: LinkedIn Posts (Real)",
  "Checklist:Week 12: Class Attendance (Real)",
  "Assignment:Week 13: Coding Assignment (Real)",
  "Assignment:Week 13: Research (Real)",
  "Assignment:Week 13: Career Services Assignment 7 - Resume (Real)",
  "Checklist:Week 13: Class Attendance (Real)",
  "Checklist:Week 13: LinkedIn Posts (Real)",
  "Assignment:Week 14: Coding Assignment (Real)",
  "Assignment:Week 14: Research (Real)",
  "Checklist:Week 14: LinkedIn Posts (Real)",
  "Checklist:Week 14: Class Attendance (Real)",
  "Assignment:Week 15: Coding Assignment (Real)",
  "Assignment:Week 15: Research (Real)",
  "Assignment:Week 15: Career Services Assignment 8 - Apply for Jobs (Real)",
  "Checklist:Week 15: LinkedIn Posts (Real)",
  "Checklist:Week 15: Class Attendance (Real)",
  "Assignment:Week 16: Research (Real)",
  "Checklist:Week 16: LinkedIn Posts (Real)",
  "Checklist:Week 16: Class Attendance (Real)",
  "Assignment:Week 17: Research (Real)",
  "Week 17: Research",
  "Assignment:Week 17: Career Services Assignment 9 - React Flash Cards (Real)",
  "Week 17: Career Services Assignment - Submission",
  "Checklist:Week 17: LinkedIn Posts (Real)",
  "Checklist:Week 17: Class Attendance (Real)",
  "Checklist:Week 18: LinkedIn Posts (Real)",
  "Assignment:Week 12: Final Coding Project (Real)",
  "External tool:OpenClass (Real)",
  "Quiz:Week 7: Coding Assignment Submission (Real)",
  "Quiz:Week 7: Research (Real)",
  "Quiz:Week 7: Career Services Submission (Real)",
  "Quiz:Week 8: Coding Assignment Submission (Real)",
  "Quiz:Week 8: Research (Real)",
  "Quiz:Week 9: Coding Assignment Submission (Real)",
  "Quiz:Week 9: Research (Real)",
  "Quiz:Week 9: Career Services Submission (Real)",
  "Quiz:Week 10: Coding Assignment Submission (Real)",
  "Quiz:Week 10: Research (Real)",
];
let gradeHeaders = document.getElementById("gradeHeaders");

for (let i = 0; i < spreadSheetHeaders.length; i++) {
  console.log(i + 3, spreadSheetHeaders[i]);
  gradeHeaders.innerHTML += `<br /> ${i + 3}: <th scope="col">${
    spreadSheetHeaders[i]
  }</th>`;
}
