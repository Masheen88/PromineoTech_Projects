// get dt element
var dt = document.querySelectorAll("dt");
console.log("dt:", dt);

//append unique class to each dt element
for (let i = 0; i < dt.length; i++) {
  dt[i].classList.add("dt-" + i);
}

function hideCourse(course) {
  for (let i = 0; i < dt.length; i++) {
    if (dt[i].id == `${course}` && dt[i].classList.contains("dt-" + i)) {
      dt[i].style.display = "none";
      return `${course} is hidden`;
    }
  }
}

// if id courseid2 and dt class match, hide the dt element
// hideCourse("courseid2");

//if id courseid34 and dt class match, hide the dt element
// hideCourse("courseid34");

//add class module block_grade_me_hide to dd id cmid1552
document.querySelector("#cmid1552").classList.add("module_block_grade_me_hide");

//add class module block_grade_me_hide to dd id courseid34
document
  .querySelector("#courseid34")
  .classList.add("module_block_grade_me_hide");
