let MySQL = document.getElementById("courseid8");

let javascript = document.getElementById("courseid4");
let js_Q1_2022 = document.getElementById("courseid32");
let React = document.getElementById("courseid2");
let React_Q1_2022 = document.getElementById("courseid34");
let Orientation_FE = document.getElementById("courseid40");
let FET_Q1_2022 = document.getElementById("courseid33");
let front_end_tech = document.getElementById("courseid3");
let FE_May_2022 = document.getElementById("courseid50");

let AutoGradedAssignments = [
  "Week 0: Coding Assignment - Submission", //autograded
  "Week 0: Coding Assignment Submission", //autograded
  "Week 0: Schedule - Submission", //autograded
  "Week 0: Schedule Submission", //autograded
  "Week 1: Research", //autograded
  "Week 1 Coding Assignment", //autograded
  "Week 1: Career Services Assignment - Submission", //autograded
  "Week 1: Career Services Assignment Submission -- LinkedIn Profile",
  "Week 1: Career Services - Submission", //autograded
  "Week 1: Coding Assignment Submission", //autograded
  "Week 1 Quiz", //autograded
  "Week 2: Research", //autograded
  "Week 2: Career Services Assignment - Submission", //autograded
  "Week 2: Career Services Assignment Submission -- GitHub Profile", //autograded
  "Week 3: Research", //autograded
  "Week 3: Research Submission", //autograded
  "Week 3: Career Services Assignment - Submission", //autograded
  "Week 3: Career Services Assignment Submission -- Elevator Pitch", //autograded
  "Week 4: Research", //autograded
  //   "Week 4 Coding Assignment",
  "Week 5: Research", //autograded
  "Week 4: Quiz", //autograded
  "Week 5: Coding Assignment - Submission", //autograded
  "Week 5: Coding Assignment Submission", //autograded
  "Week 5: Coding Assignment", //autograded
  "Week 5: Career Services Submission", //autograded
  "Week 5: Career Services Assignment Submission -- JavaScript Flash Cards", //autograded
  //   "Week 5: Quiz",
  //   "Week 5 Coding Assignment",
  //   "Week 6: Research",
  "Week 7: Research", //autograded
  "Week 7: Career Services Submission", //autograded
  "Week 7: Career Services - Submission", //autograded
  "Week 7: Coding Assignment Submission", //autograded
  "Week 7: Coding Assignment - Submission", //autograded
  //   "Week 7: Coding Assignment",
  "Week 7: Quiz", //autograded
  "Week 8: Research", //autograded
  //   "Week 8 Research",
  "Week 8: Coding Assignment Submission", //autograded
  //   "Week 8: Coding Assignment",
  //   "Week 8 Coding Assignment",
  "Week 8: Quiz", //autograded
  "Week 9: Research", //autograded
  "Week 9: Career Services Submission", //autograded
  "Week 9: Coding Assignment Submission", //autograded
  //   "Week 9: Coding Assignment",
  "Week 9: Quiz", //autograded
  //   "Week 9 Quiz",
  "Week 10: Research", //autograded
  "Week 10: Coding Assignment Submission", //autograded
  //   "Week 10: Coding Assignment",
  "Week 10: Quiz", //autograded
  "Week 10 Quiz", //autograded
  //   "Week 10 Quiz",
  "Week 11: Research",
  "Week 11: Quiz", //autograded
  "Week 11: Coding Assignment Submission", //autograded
  "Week 11: Career Services Submission", //autograded
  //   "Week 11: Coding Assignment",
  "Week 13: Career Services Submission", //autograded
  "Week 13: Career Services - Submission", //autograded
  "Week 13: Career Services Assignment - Submission",
  "Week 13: Coding Assignment Submission", //autograded
  //   "Week 13: Coding Assignment",
  "Week 13: Coding Assignment - Submission", //autograded
  //   "Week 13 Coding Assignment",
  "Week 13: Research", //autograded
  "Week 14: Research", //autograded
  "Week 14: Coding Assignment Submission", //autograded
  "Week 14: Coding Assignment - Submission", //autograded
  //   "Week 14: Coding Assignment",
  "Week 15: Research", //autograded
  "Week 15: Career Services Submission", //autograded
  "Week 15: Career Services - Submission", //autograded
  "Week 15: Career Services Assignment - Submission", //autograded
  "Week 15: Coding Assignment Submission", //autograded
  "Week 15: Coding Assignment - Submission", //autograded
  "Week 16: Research", //autograded
  "Week 17: Research", //autograded
  "Week 17: Career Services Assignment - Submission", //autograded
];

function HideStuff(hideIt) {
  //if hideIt is null do nothing else do something.
  if (hideIt == null) {
    //do nothing
    return;
  }

  parentElement = hideIt.parentElement;
  console.log("parentElement:", parentElement);

  //assign a class to the parent element
  parentElement.classList.add("gradeMeCurriculum");

  //if children in parentElement contain text from AutoGradedAssignments array then hide it
  for (let i = 0; i < parentElement.children.length; i++) {
    for (let j = 0; j < AutoGradedAssignments.length; j++) {
      if (
        parentElement.children[i].innerText.includes(AutoGradedAssignments[j])
      ) {
        parentElement.children[i].style.display = "none";
      }
    }
  }
}

console.log("MySQL");
HideStuff(MySQL);
console.log("javascript");
HideStuff(javascript);
console.log("js_Q1_2022");
HideStuff(js_Q1_2022);
console.log("React");
HideStuff(React);
console.log("React_Q1_2022");
HideStuff(React_Q1_2022);
console.log("Orientation_FE");
HideStuff(Orientation_FE);
console.log("FET_Q1_2022");
HideStuff(FET_Q1_2022);
console.log("front_end_tech");
HideStuff(front_end_tech);
console.log("FE_May_2022");
HideStuff(FE_May_2022);
