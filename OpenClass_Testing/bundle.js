(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
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
      },
      { fs: 2 },
    ],
    2: [function (require, module, exports) {}, {}],
  },
  {},
  [1]
);
