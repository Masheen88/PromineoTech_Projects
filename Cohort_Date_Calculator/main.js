let currentDate = new Date();
console.log("currentDate:", currentDate);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(
  "The current Date is " + monthNames[currentDate.getMonth()],
  currentDate.getDate().toString(),
  currentDate.getFullYear().toString()
);

let divDate = document.getElementById("currentDate");
let divCohort = document.getElementById("cohortDate");

divDate.innerHTML = `The current Date is ${
  monthNames[currentDate.getMonth()]
} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

function getCohortClassDates() {
  let newDate = new Date();
  let newDate2 = new Date();
  let newDate3 = new Date();
  let time = getDatePicker();
  console.log("time:", time);

  console.log("newDate:", newDate);

  //Loops through the 18 week class start dates
  for (let i = 0; i < 18; i++) {
    let cohortClassDate = new Date();
    cohortClassDate.setDate(cohortClassDate.getDate() + i * 7);

    newDate2.setDate(time[1]); //Month
    newDate.setDate(time[1] + i * 7); //Day
    newDate3.setDate(time[1]); //Year

    let dateTag = document.createElement("p");
    dateText = document.createTextNode(`
    Week ${i + 1}:
    ${monthNames[cohortClassDate.getMonth()]}
    ${newDate.getDate()}
    ${newDate3.getFullYear()}
    `);
    dateTag.appendChild(dateText);
    divCohort.appendChild(dateTag);
  }
}

//

function getDatePicker() {
  var datePicker = document.getElementById("datePicker").value;
  /*  console.log(
    "Month:",
    parseInt(datePicker.slice(5).slice(0, 2)),
    `\n`,
    "Day:",
    parseInt(datePicker.slice(8)),
    `\n`,
    "Year:",
    parseInt(datePicker.slice(0, 4))
  ); */

  let datePickerValue = [
    parseInt(datePicker.slice(5).slice(0, 2)), //Month
    parseInt(datePicker.slice(8)), //Day
    parseInt(datePicker.slice(0, 4)), //Year
  ];
  //  console.log("datePickerValue:", datePickerValue);
  return datePickerValue;
}
