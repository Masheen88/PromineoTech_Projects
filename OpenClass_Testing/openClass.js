// This is what OpenClass Uses to include fs
var fs = require("fs");
readFileSync = fs.readFileSync;
//      var input = fs.readFileSync(process.stdin.fd, “utf-8").trim().split(“\n”);

var input = readFileSync("./input.txt", "utf-8").trim().split("\n");
var planeTicket = parseInt(input[0]);
var money = parseInt(input[1]);
var vacationTime = input[2];
console.log("----------------------------------------");
console.log("planeTicket:", planeTicket);
console.log("money:", money);
console.log(
  "vacationTime:",
  vacationTime,
  "is of datatype",
  typeof vacationTime
);
console.log("----------------------------------------");
console.log("vacationTime compared");
console.log(money >= planeTicket && vacationTime);
console.log('vacationTime == "true"compared');
console.log(money >= planeTicket && vacationTime == "true");
console.log('vacationTime === "true" compared');
console.log(money >= planeTicket && vacationTime === "true");
console.log("vacationTime == true compared");
console.log(money >= planeTicket && vacationTime == true);
console.log("vacationTime === true compared");
console.log(money >= planeTicket && vacationTime === true);
