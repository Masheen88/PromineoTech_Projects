// Dark mode snippet - Begin
function toggleDarkMode() {
  var checkbox = document.getElementById("dark-mode");
  var body = document.getElementsByTagName("body")[0];
  if (checkbox.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}
// Dark mode snippet - End

//Function to get the start date of a cohort
function getCohortStartDate() {
  console.log(`\n Start Date Function - Begin`);

  // Gets the month, day, and year from the calendar picker
  let cohortStartDateValue = document.querySelector(`input[type="date"]`).value;
  // console.log("cohortStartDateData:", cohortStartDateValue);

  //convert cohortStateDateValue to a date object
  let cohortStartDate = new Date(cohortStartDateValue);
  // console.log("cohortStartDate check begin:", cohortStartDate);
  // if cohortStateDate does not begin on Monday, increment the date until it does
  while (cohortStartDate.getDay() != 1) {
    cohortStartDate.setDate(cohortStartDate.getDate() + 1);
    console.log("cohortStateDate has been incremented", cohortStartDate);
  }
  console.log("cohortStartDate is Monday:", cohortStartDate);

  //convert cohortStateDate to an array of numbers
  let cohortStartDateArray = [
    cohortStartDate.getMonth() + 1, // month
    cohortStartDate.getDate(), // day
    cohortStartDate.getFullYear(), // year
  ];
  console.log(`array num:`, cohortStartDateArray);

  // console.log("cohortStartDate is a Monday:", cohortStartDate);

  /*
  cohortStartDateValue is a string, it needs to be 
  parseInt and slice it to get the month, day, and year
  */

  // month
  let cohortStartMonthValue = parseInt(cohortStartDateValue.slice(5, 7));
  // console.log("cohortStartData-Month:", cohortStartMonthValue);

  // day
  let cohortStartDayValue = parseInt(cohortStartDateValue.slice(8, 10));
  // console.log("cohortStartData-Day:", cohortStartDayValue);

  // year
  let cohortStartYearValue = parseInt(cohortStartDateValue.slice(0, 4));
  // console.log("cohortStartData-Year:", cohortStartYearValue);
  console.log(` Start Date Function - End`);
  return cohortStartDateArray;
}

//Function to get the end date of a cohort
function getCohortEndDate(startDate) {
  console.log(`\n End Date Function - Begin`);
  let Week18EndDate = new Date(
    parseInt(startDate[2]),
    parseInt(startDate[0]) - 1,
    parseInt(startDate[1]) + 18 * 7
  );
  // get the month, day, and year from the date
  let month = Week18EndDate.getMonth() + 1;
  let day = Week18EndDate.getDate();
  let year = Week18EndDate.getFullYear();

  Week18EndDateArray = [month, day, year];
  console.log(` End Date Function - End`);
  return Week18EndDateArray;
}

//Function Calendar
function calendar() {
  console.log(`Calendar Function`);
  // variable for the starting date of a cohort
  let cohortStartDate = getCohortStartDate();

  // variable for the ending date of a cohort
  let cohortEndDate = getCohortEndDate(cohortStartDate);

  console.log(`\ncohortStartDate array:`, cohortStartDate);
  console.log(`cohortEndDate array:`, cohortEndDate);

  // use a for loop to create the calendar
  let calendar = document.getElementById("calendar");
  let table = document.createElement("table");
  table.setAttribute("id", "calendar-table");
  calendar.appendChild(table);
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  let header = document.createElement("th");
  let row = document.createElement("tr");
  tableBody.appendChild(row);
  let cell = document.createElement("td");
  row.appendChild(cell);
  // loop to create each day of the calendar
  for (let i = 0; i < 18; i++) {
    // 18 weeks
    let row = document.createElement("tr");
    tableBody.appendChild(row);
    for (let j = 0; j < 7; j++) {
      // 7 days per week
      let cell = document.createElement("td");
      row.appendChild(cell);
      let date = new Date(
        cohortStartDate[2],
        cohortStartDate[0] - 1,
        cohortStartDate[1] + i * 7 + j
      );
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let dateString = `${month}/${day}/${year}`;
      cell.innerHTML = `
      <div class="date">
   
  
      <div>${date.toLocaleString("en-us", {
        weekday: "long",
      })} - ${dateString}</div>
      <br />
      <div class=date-note-field>
      <textarea class="notes" placeholder="Notes would go to API"></textarea>
      </div>
      </div>
      `;
      //notes should extend the full width of the dates div
      cell.querySelector(".notes").style.width = "95%";

      // if the date is the current date, add a class of "today"
      if (date.getFullYear() == new Date().getFullYear()) {
        if (date.getMonth() == new Date().getMonth()) {
          if (date.getDate() == new Date().getDate()) {
            cell.classList.add("today");
          }
        }
      }

      // if the date is the start date of the cohort, add a class of "start-date"
      if (date.getFullYear() == cohortStartDate[2]) {
        if (date.getMonth() == cohortStartDate[0] - 1) {
          if (date.getDate() == cohortStartDate[1]) {
            cell.classList.add("start-date");
          }
        }
      }

      // if the date is the end date of the cohort, add a class of "end-date"
      if (date.getFullYear() == cohortEndDate[2]) {
        if (date.getMonth() == cohortEndDate[0] - 1) {
          if (date.getDate() == cohortEndDate[1] - 1) {
            cell.classList.add("end-date");
          }
        }
      }
    }
  }

  console.log(`\nEnd Calendar Function`);
}

//ajax get request
function getRequest(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}

//caledar project it
// matts-calendar-api
// const URL = `https://calendar.google.com/calendar/r/settings/basic`;

//api 115165176908-agc1bgdftbu1efh5v3epd2hc5tfou9kr.apps.googleusercontent.com
// client id 115165176908-agc1bgdftbu1efh5v3epd2hc5tfou9kr.apps.googleusercontent.com
//sec 115165176908-agc1bgdftbu1efh5v3epd2hc5tfou9kr.apps.googleusercontent.com
