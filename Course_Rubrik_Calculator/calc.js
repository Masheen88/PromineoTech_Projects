function frontEndGrading() {
  console.log("Front End Grading Data:\n\n");

  let CourseTotalPercent = 100; // Total percent of the course

  let CoursePointTotal = 3200; // The total number of points possible for the course

  let OpenClassPercent = 10; // Total Percent worth for OpenClass
  let totalOpenClassAssignments = 8; //! Total number of assignments in OpenClass

  let CodingAssignmentPercent = 25; // Total Percent worth for Coding Assignments
  let totalCodingAssignments = 11; //! Total number of assignments in Coding Assignments

  let ResearchPercent = 5; // Total Percent worth for Research
  let totalResearchAssignments = 15; //! Total number of assignments in Research

  let CareerServicesPercent = 5; // Total Percent worth for Career Services
  let totalCareerServicesAssignments = 10; //! Total number of assignments in Career Services

  let UnitFinalProjectsPercent = 25; // Total Percent worth for Unit Final Projects
  let totalUnitFinalProjects = 2; //! Total number of assignments in Unit Final Projects

  let UnitFinalExamPercent = 25; // Total Percent worth for Unit Final Exam
  let totalUnitFinalExam = 1; //! Total number of assignments in Unit Final Exam

  let OtherPercent = 5; // Total Percent worth for Other
  //! Total Number of Other assignments listed below

  // Total percent of all assignments
  let TotalPercent =
    OpenClassPercent +
    CodingAssignmentPercent +
    ResearchPercent +
    CareerServicesPercent +
    UnitFinalProjectsPercent +
    UnitFinalExamPercent +
    OtherPercent;

  // Total Percent for the entire course
  console.log("Course Percent Total:", TotalPercent);
  console.log("Original CoursePointTotal:", CoursePointTotal, "\n\n");

  let OpenClassPoints =
    (OpenClassPercent / CourseTotalPercent) * CoursePointTotal; // Total points for OpenClass

  let OpenClassPointsPerAssignment =
    OpenClassPoints / totalOpenClassAssignments; // Total points per assignment in OpenClass

  let CodingAssignmentPoints =
    (CodingAssignmentPercent / CourseTotalPercent) * CoursePointTotal; // Total points for Coding Assignments

  let CodingAssignmentPointsPerAssignment =
    CodingAssignmentPoints / totalCodingAssignments; // Total points per assignment in Coding Assignments

  let ResearchPoints =
    (ResearchPercent / CourseTotalPercent) * CoursePointTotal; // Total points for Research

  let ResearchPointsPerAssignment = ResearchPoints / totalResearchAssignments; // Total points per assignment in Research

  let CareerServicesPoints =
    (CareerServicesPercent / CourseTotalPercent) * CoursePointTotal; // Total points for Career Services

  let CareerServicesPointsPerAssignment =
    CareerServicesPoints / totalCareerServicesAssignments; // Total points per assignment in Career Services

  let UnitFinalProjectsPoints =
    (UnitFinalProjectsPercent / CourseTotalPercent) * CoursePointTotal; // Total points for Unit Final Projects

  let UnitFinalProjectsPointsPerAssignment =
    UnitFinalProjectsPoints / totalUnitFinalProjects; // Total points per assignment in Unit Final Projects

  let UnitFinalExamPoints =
    (UnitFinalExamPercent / CourseTotalPercent) * CoursePointTotal; // Total points for Unit Final Exam

  let UnitFinalExamPointsPerAssignment =
    UnitFinalExamPoints / totalUnitFinalExam; // Total points per assignment in Unit Final Exam

  let OtherPoints = (OtherPercent / CourseTotalPercent) * CoursePointTotal; // Total points for Other

  //* Other Quizzes
  // Quizzes are worth 50% of OtherPoints
  let totalOtherQuizPoints = OtherPoints / 2; // Total points for Other Quizzes

  // Class Attendance is worth 25% of OtherPoints
  let totalOtherClassAttendancePoints = OtherPoints / 4; // Total points for Other Class Attendance

  // LinkedIn Posts are wroth 25% of OtherPoints
  let totalOtherLinkedInPostsPoints = OtherPoints / 4; // Total points for Other LinkedIn Posts

  //
  let totalLabsPoints = 0; //! Total points for Labs

  AssignmentArray = [
    OpenClassPointsPerAssignment,
    CodingAssignmentPointsPerAssignment,
    ResearchPointsPerAssignment,
    CareerServicesPointsPerAssignment,
    UnitFinalProjectsPointsPerAssignment,
    UnitFinalExamPointsPerAssignment,
    totalOtherQuizPoints,
    totalOtherClassAttendancePoints,
    totalOtherLinkedInPostsPoints,
    totalLabsPoints,
  ];

  console.log("Original Grading Array:", AssignmentArray, "\n\n");

  //? increases CoursePointsTotal until all values in the AssignmentArray are whole numbers
  while (
    Number.isInteger(OpenClassPointsPerAssignment) == false ||
    Number.isInteger(CodingAssignmentPointsPerAssignment) == false ||
    Number.isInteger(ResearchPointsPerAssignment) == false ||
    Number.isInteger(CareerServicesPointsPerAssignment) == false ||
    Number.isInteger(UnitFinalProjectsPointsPerAssignment) == false ||
    Number.isInteger(UnitFinalExamPointsPerAssignment) == false ||
    Number.isInteger(totalOtherQuizPoints) == false ||
    Number.isInteger(totalOtherClassAttendancePoints) == false ||
    Number.isInteger(totalOtherLinkedInPostsPoints) == false ||
    Number.isInteger(totalLabsPoints) == false
  ) {
    CoursePointTotal++; // increase CoursePointTotal by 1
    OpenClassPoints =
      (OpenClassPercent / CourseTotalPercent) * CoursePointTotal;
    OpenClassPointsPerAssignment = OpenClassPoints / totalOpenClassAssignments;
    CodingAssignmentPoints =
      (CodingAssignmentPercent / CourseTotalPercent) * CoursePointTotal;
    CodingAssignmentPointsPerAssignment =
      CodingAssignmentPoints / totalCodingAssignments;
    ResearchPoints = (ResearchPercent / CourseTotalPercent) * CoursePointTotal;
    ResearchPointsPerAssignment = ResearchPoints / totalResearchAssignments;
    CareerServicesPoints =
      (CareerServicesPercent / CourseTotalPercent) * CoursePointTotal;
    CareerServicesPointsPerAssignment =
      CareerServicesPoints / totalCareerServicesAssignments;
    UnitFinalProjectsPoints =
      (UnitFinalProjectsPercent / CourseTotalPercent) * CoursePointTotal;
    UnitFinalProjectsPointsPerAssignment =
      UnitFinalProjectsPoints / totalUnitFinalProjects;
    UnitFinalExamPoints =
      (UnitFinalExamPercent / CourseTotalPercent) * CoursePointTotal;
    UnitFinalExamPointsPerAssignment = UnitFinalExamPoints / totalUnitFinalExam;
    OtherPoints = (OtherPercent / CourseTotalPercent) * CoursePointTotal;
    totalOtherQuizPoints = OtherPoints / 2 / 8; //! 8 quizzes
    totalOtherClassAttendancePoints = OtherPoints / 4 / 16; //! 16 class attendance days
    totalOtherLinkedInPostsPoints = OtherPoints / 4 / 18; //! 18 LinkedIn posts
    totalLabsPoints = 0; //? Total Labs = 0
    AssignmentArray = [
      OpenClassPointsPerAssignment,
      CodingAssignmentPointsPerAssignment,
      ResearchPointsPerAssignment,
      CareerServicesPointsPerAssignment,
      UnitFinalProjectsPointsPerAssignment,
      UnitFinalExamPointsPerAssignment,
      totalOtherQuizPoints,
      totalOtherClassAttendancePoints,
      totalOtherLinkedInPostsPoints,
      totalLabsPoints,
    ];
    // console.log("after adjustment:", AssignmentArray); //! Warning: This will log a lot of data
    // console.log("CoursePointTotal:", CoursePointTotal); //! Warning: this will print a lot of numbers
  }
  console.log("**Loop Completed**");
  console.log("New CoursePointTotal:", CoursePointTotal);
  console.log("Adjusted AssignmentArray:", AssignmentArray);

  //Display the name of each element in AssignmentArray
  console.log("\n**Point value per assignments in each section**");
  console.log("OpenClass:", AssignmentArray[0]);
  console.log("Coding Assignment:", AssignmentArray[1]);
  console.log("Research:", AssignmentArray[2]);
  console.log("Career Services:", AssignmentArray[3]);
  console.log("UnitFinalProjects:", AssignmentArray[4]);
  console.log("UnitFinalExam:", AssignmentArray[5]);
  console.log("Quizzes:", AssignmentArray[6]);
  console.log("Class Attendance:", AssignmentArray[7]);
  console.log("LinkedIn Posts:", AssignmentArray[8]);
  console.log("Labs:", AssignmentArray[9]);
}
frontEndGrading();
