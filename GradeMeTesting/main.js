console.log("Testing in Grade Me!");

let cohortWeeks = [
  "Week 1:",
  "Week 2:",
  "Week 4:",
  "Week 5:",
  "Week 7:",
  "Week 8:",
  "Week 9:",
  "Week 10:",
  "Week 11:",
  "Week 13:",
  "Week 14:",
  "Week 15:",
  "Week 17:",
  "Week 18:",
];

//loop through all a tags and console the text
$("a").each(function () {
  console.log($(this).text());
  innerATagText = $(this).text();

  //if innerATagText contains part of the text from the array, console test
  for (let i = 0; i < cohortWeeks.length; i++) {
    if (innerATagText.includes(cohortWeeks[i])) {
      console.log(cohortWeeks[i]);
      //Append text "Hide" to the end of the a tag
      $(this).append("Need Hide Me");

      //display none on grademe-mod-name class
      $(".grademe-mod-name").css("display", "none");
    }
  }
});
