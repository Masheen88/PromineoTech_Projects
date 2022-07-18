//get value from id cohortStartDatePicker

function getCohortStartDate() {
  let cohortStartDateValue = document.querySelector(`input[type="date"]`).value;
  console.log("cohortStartData:", cohortStartDateValue);

  //split cohortStartDateValue into array
  let cohortStartMonthValue = cohortStartDateValue.slice(5, 7);
  console.log("cohortStartData-Month:", cohortStartMonthValue);
  let cohortStartDayValue = cohortStartDateValue.slice(8, 10);
  console.log("cohortStartData-Day:", cohortStartDayValue);
  let cohortStartYearValue = cohortStartDateValue.slice(0, 4);
  console.log("cohortStartData-Year:", cohortStartYearValue);

  return [cohortStartMonthValue, cohortStartDayValue, cohortStartYearValue];
}

weekArray = 0;
let week0 = [];
let week1 = [];
let week2 = [];

function calendar() {
  let cohortStartDate = getCohortStartDate();
  console.log("cohortStartDate before Loop: ", cohortStartDate);
  console.log(
    parseInt(cohortStartDate[0]),
    parseInt(cohortStartDate[1]),
    parseInt(cohortStartDate[2])
  );
  let initialdate = 0;
  //loop 120 days (18 weeks) weeks from cohorotStartDate
  for (let j = 0; j <= 18; j++) {
    for (let i = 0; i < 126; i++) {
      console.log(`\n i: `, i, "Begginning of loop!");

      let cohortGetDate = new Date( //create new date object
        parseInt(cohortStartDate[2]), //year
        parseInt(cohortStartDate[0] - 1), //month
        parseInt(cohortStartDate[1]) + initialdate //day
      );
      //   console.log("testing", cohortGetDate);

      let stringifiedcorhortGetDate = cohortGetDate;
      console.log("cohortGetDate Start Day: ", stringifiedcorhortGetDate);
      let diff =
        stringifiedcorhortGetDate.getDate() -
        stringifiedcorhortGetDate.getDay() +
        (stringifiedcorhortGetDate.getDay() === 0 ? -6 : 1);
      let cohortGetDateStartOfWeek = new Date(
        stringifiedcorhortGetDate.setDate(diff)
      );

      //returns the date of the start of the week
      console.log("cohortGetDateStartOfWeek: ", cohortGetDateStartOfWeek);

      //return the date of the end of the week
      let cohortGetDateEndOfWeek = new Date(
        cohortGetDateStartOfWeek.setDate(cohortGetDateStartOfWeek.getDate() + 6)
      );
      console.log("cohortGetDateEndOfWeek: ", cohortGetDateEndOfWeek);

      let week0 = document.getElementById("week0");
      let week0data = document.createElement("div");
      week0data.innerHTML = `${cohortGetDateStartOfWeek.toLocaleDateString()} - ${cohortGetDateEndOfWeek.toLocaleDateString()}`;
      week0.appendChild(week0data);

      console.log(`week: ${"week" + [weekArray]}`);

      //if date is between cohortStartDate and cohortGetDateEndOfWeek add to week array

      if (
        cohortGetDateStartOfWeek >= cohortStartDate &&
        cohortGetDateStartOfWeek <= cohortGetDateEndOfWeek
      ) {
        "week" + [weekArray].push(cohortGetDateStartOfWeek);
        console.log(i, ` testing week number:${"week" + [weekArray]}`);
      }

      initialdate++; //increment initialdate by 1
      console.log(`Week ${i}: Front End Orientation:`, cohortGetDate);
      //get day from slice of cohortGetDate
      let cohortGetDay = cohortGetDate.getDate();

      //split cohortGetDate into array
      let cohortGetMonthValue = cohortGetDate.getMonth() + 1;
      console.log("cohortGetData-Month:", cohortGetMonthValue);
      let cohortGetDayValue = cohortGetDate.getDate();
      console.log("cohortGetData-Day:", cohortGetDayValue);
      let cohortGetYearValue = cohortGetDate.getFullYear();
      console.log("cohortGetData-Year:", cohortGetYearValue);

      cohortGetDateArray = [
        cohortGetMonthValue,
        cohortGetDayValue,
        cohortGetYearValue,
      ];
    }
    weekArray++;
    initialdate = 0;
  }

  console.log("week0: ", week0);
}

///TESTIN
