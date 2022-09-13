let MySQL = document.getElementById("courseid8");
let javascript = document.getElementById("courseid4");
let js_Q1_2022 = document.getElementById("courseid32");
let React = document.getElementById("courseid2");
let React_Q1_2022 = document.getElementById("courseid34");
let Orientation_FE = document.getElementById("courseid40");
let FET_Q1_2022 = document.getElementById("courseid33");
let front_end_tech = document.getElementById("courseid3");

function HideStuff(hideIt) {
  //check to see if hideIt has a div inside of it with the attribute tabindex="0"
  //if it does, then add a class of "open" to it and style display none to hideIt
  //if it doesn't, then do nothing
  if (hideIt.querySelector('[tabindex="0"]')) {
    console.log("Hidden", hideIt);
    hideIt.querySelector('[tabindex="0"]').classList.add("open");
    hideIt.style.display = "none";
  }
}

HideStuff(MySQL);
HideStuff(javascript);
HideStuff(js_Q1_2022);
HideStuff(React);
HideStuff(React_Q1_2022);
HideStuff(Orientation_FE);
HideStuff(FET_Q1_2022);
HideStuff(front_end_tech);

// if div class grademe-mod-name has text Week 3: then add style of display none to the class

let AutoGradedAssignments = [
  "Week 1: Research", // autograded
  //   "Week 1 Quiz",
  "Week 1 Coding Assignment",
  "Week 1: Career Services Assignment - Submission", //autograded
  "Week 1: Career Services - Submission", //autograded
  "Week 1: Coding Assignment Submission", //autograded
  "Week 2: Research", //autograded
  "Week 2: Career Services Assignment - Submission", //autograded
  //   "Week 2 Coding Assignment",
  "Week 3: Research", //autograded
  "Week 3: Research Submission", //autograded
  "Week 3: Career Services Assignment - Submission", //autograded
  //   "Week 3: Coding Assignment",
  "Week 4: Research", //autograded
  //   "Week 4 Coding Assignment",
  "Week 5: Research", //autograded
  "Week 4: Quiz", //autograded
  "Week 5: Coding Assignment - Submission", //autograded
  "Week 5: Coding Assignment",
  "Week 5: Career Services Submission", //autograded
  //   "Week 5: Quiz",
  //   "Week 5 Coding Assignment",
  //   "Week 6: Research",
  "Week 7: Research", // autograded
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
  //   "Week 10 Quiz",
  "Week 11: Quiz", //autograded
  //   "Week 11: Coding Assignment",
  "Week 13: Career Services Submission", //autograded
  "Week 13: Career Services - Submission", //autograded
  "Week 13: Coding Assignment Submission", //autograded
  //   "Week 13: Coding Assignment",
  "Week 13: Coding Assignment - Submission", //autograded
  //   "Week 13 Coding Assignment",
  "Week 13: Research", // autograded
  "Week 14: Research", // autograded
  "Week 14: Coding Assignment Submission", //autograded
  "Week 14: Coding Assignment - Submission", //autograded
  //   "Week 14: Coding Assignment",
  "Week 15: Research", // autograded
  "Week 15: Career Services Submission", //autograded
  "Week 15: Career Services - Submission", //autograded
  "Week 15: Career Services Assignment - Submission", //autograded
  "Week 15: Coding Assignment Submission", //autograded
  "Week 15: Coding Assignment - Submission", //autograded
  "Week 16: Research", //autograded
  //   "Week 17: Research",
  "Week 0: Coding Assignment - Submission", //autograded
  "Week 0: Schedule - Submission", //autograded
];

for (let i = 0; i < AutoGradedAssignments.length; i++) {
  console.log(AutoGradedAssignments[i]);

  //loop through all the divs with the class grademe-mod-name
  //if the text content of the div is equal to the AutoGradedAssignments[i] then add a class of "matthew" to the parent div
  let divs = document.querySelectorAll(".grademe-mod-name");
  for (let j = 0; j < divs.length; j++) {
    if (divs[j].textContent === AutoGradedAssignments[i]) {
      divs[j].parentElement.classList.add("matthew");
    }
  }

  //if the parent div has a class of "matthew" then add a style of display none with important tag
  //   if (document.querySelector(".matthew")) {
  //     let matthew = document.querySelector(".dd-wrap.matthew");
  //     console.log("you found a matthew:", matthew);
  //     // add a style to matthew after page has fully loaded
  //     window.addEventListener("load", function () {
  //       matthew.style.display = "none !important";
  //     });
  //   }
}
