console.log("Page Running");
let h2Tags = document.getElementsByTagName("h2");
// console.log("My H2", h2Tags);

//Number of weeks in the cohort
let Weeks = [
  "Week 1:",
  "Week 2:",
  "Week 3:",
  "Week 4:",
  "Week 5:",
  "Week 6:",
  "Week 7:",
  "Week 8:",
  "Week 9:",
  "Week 10:",
  "Week 11:",
  "Week 12:",
  "Week 13:",
  "Week 14:",
  "Week 15:",
  "Week 16:",
  "Week 17:",
  "Week 18:",
];

//Compare if h2 tag starts with the text "Week 1"
for (let i = 0; i < h2Tags.length; i++) {
  console.log("Inside i for Loop:", h2Tags[i].innerText);

  for (let j = 0; j < Weeks.length; j++) {
    // console.log("Inside j for Loop:", Weeks[j]);
    if (h2Tags[i].innerText.startsWith(Weeks[j])) {
      console.log("Yes");

      //add background color to h2Tags[i]
      h2Tags[i].style.backgroundColor = "#02bf3b";
      break;
    }
  }
}

//return value of td element from page
let myTableDatas = document.getElementsByTagName("td");
// console.log("My TD", myTableDatas);

dateText = "Saturday, August 27, 2022, 5:47 PM";
//loop through all divs on page and and compare innertext to dateText
for (let i = 0; i < myTableDatas.length; i++) {
  if (myTableDatas[i].innerText === dateText) {
    console.log("Found Date", myTableDatas[i]);
    myTableDatas[i].style.color = "red";
  }
}
