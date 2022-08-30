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
        const GSheetReader = require("g-sheets-api");

        const gSheetsAPIURL =
          "https://docs.google.com/spreadsheets/d/1aK_jYKyW9mNlvOY11X6JWQZuIhWC_1qnZn0rI_9nXQs/edit?usp=sharing";

        console.log(gSheetsAPIURL);

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
          let cohortStartDateValue =
            document.querySelector(`input[type="date"]`).value;
          // console.log("cohortStartDateData:", cohortStartDateValue);

          //convert cohortStateDateValue to a date object
          let cohortStartDate = new Date(cohortStartDateValue);
          // console.log("cohortStartDate check begin:", cohortStartDate);
          // if cohortStateDate does not begin on Monday, increment the date until it does
          while (cohortStartDate.getDay() != 1) {
            cohortStartDate.setDate(cohortStartDate.getDate() + 1);
            console.log(
              "cohortStateDate has been incremented",
              cohortStartDate
            );
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
          let cohortStartMonthValue = parseInt(
            cohortStartDateValue.slice(5, 7)
          );
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
      },
      { "g-sheets-api": 5 },
    ],
    2: [
      function (require, module, exports) {
        var global = typeof self !== "undefined" ? self : this;
        var __self__ = (function () {
          function F() {
            this.fetch = false;
            this.DOMException = global.DOMException;
          }
          F.prototype = global;
          return new F();
        })();
        (function (self) {
          var irrelevant = (function (exports) {
            var support = {
              searchParams: "URLSearchParams" in self,
              iterable: "Symbol" in self && "iterator" in Symbol,
              blob:
                "FileReader" in self &&
                "Blob" in self &&
                (function () {
                  try {
                    new Blob();
                    return true;
                  } catch (e) {
                    return false;
                  }
                })(),
              formData: "FormData" in self,
              arrayBuffer: "ArrayBuffer" in self,
            };

            function isDataView(obj) {
              return obj && DataView.prototype.isPrototypeOf(obj);
            }

            if (support.arrayBuffer) {
              var viewClasses = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ];

              var isArrayBufferView =
                ArrayBuffer.isView ||
                function (obj) {
                  return (
                    obj &&
                    viewClasses.indexOf(Object.prototype.toString.call(obj)) >
                      -1
                  );
                };
            }

            function normalizeName(name) {
              if (typeof name !== "string") {
                name = String(name);
              }
              if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
                throw new TypeError("Invalid character in header field name");
              }
              return name.toLowerCase();
            }

            function normalizeValue(value) {
              if (typeof value !== "string") {
                value = String(value);
              }
              return value;
            }

            // Build a destructive iterator for the value list
            function iteratorFor(items) {
              var iterator = {
                next: function () {
                  var value = items.shift();
                  return { done: value === undefined, value: value };
                },
              };

              if (support.iterable) {
                iterator[Symbol.iterator] = function () {
                  return iterator;
                };
              }

              return iterator;
            }

            function Headers(headers) {
              this.map = {};

              if (headers instanceof Headers) {
                headers.forEach(function (value, name) {
                  this.append(name, value);
                }, this);
              } else if (Array.isArray(headers)) {
                headers.forEach(function (header) {
                  this.append(header[0], header[1]);
                }, this);
              } else if (headers) {
                Object.getOwnPropertyNames(headers).forEach(function (name) {
                  this.append(name, headers[name]);
                }, this);
              }
            }

            Headers.prototype.append = function (name, value) {
              name = normalizeName(name);
              value = normalizeValue(value);
              var oldValue = this.map[name];
              this.map[name] = oldValue ? oldValue + ", " + value : value;
            };

            Headers.prototype["delete"] = function (name) {
              delete this.map[normalizeName(name)];
            };

            Headers.prototype.get = function (name) {
              name = normalizeName(name);
              return this.has(name) ? this.map[name] : null;
            };

            Headers.prototype.has = function (name) {
              return this.map.hasOwnProperty(normalizeName(name));
            };

            Headers.prototype.set = function (name, value) {
              this.map[normalizeName(name)] = normalizeValue(value);
            };

            Headers.prototype.forEach = function (callback, thisArg) {
              for (var name in this.map) {
                if (this.map.hasOwnProperty(name)) {
                  callback.call(thisArg, this.map[name], name, this);
                }
              }
            };

            Headers.prototype.keys = function () {
              var items = [];
              this.forEach(function (value, name) {
                items.push(name);
              });
              return iteratorFor(items);
            };

            Headers.prototype.values = function () {
              var items = [];
              this.forEach(function (value) {
                items.push(value);
              });
              return iteratorFor(items);
            };

            Headers.prototype.entries = function () {
              var items = [];
              this.forEach(function (value, name) {
                items.push([name, value]);
              });
              return iteratorFor(items);
            };

            if (support.iterable) {
              Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
            }

            function consumed(body) {
              if (body.bodyUsed) {
                return Promise.reject(new TypeError("Already read"));
              }
              body.bodyUsed = true;
            }

            function fileReaderReady(reader) {
              return new Promise(function (resolve, reject) {
                reader.onload = function () {
                  resolve(reader.result);
                };
                reader.onerror = function () {
                  reject(reader.error);
                };
              });
            }

            function readBlobAsArrayBuffer(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsArrayBuffer(blob);
              return promise;
            }

            function readBlobAsText(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsText(blob);
              return promise;
            }

            function readArrayBufferAsText(buf) {
              var view = new Uint8Array(buf);
              var chars = new Array(view.length);

              for (var i = 0; i < view.length; i++) {
                chars[i] = String.fromCharCode(view[i]);
              }
              return chars.join("");
            }

            function bufferClone(buf) {
              if (buf.slice) {
                return buf.slice(0);
              } else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
              }
            }

            function Body() {
              this.bodyUsed = false;

              this._initBody = function (body) {
                this._bodyInit = body;
                if (!body) {
                  this._bodyText = "";
                } else if (typeof body === "string") {
                  this._bodyText = body;
                } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                  this._bodyBlob = body;
                } else if (
                  support.formData &&
                  FormData.prototype.isPrototypeOf(body)
                ) {
                  this._bodyFormData = body;
                } else if (
                  support.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(body)
                ) {
                  this._bodyText = body.toString();
                } else if (
                  support.arrayBuffer &&
                  support.blob &&
                  isDataView(body)
                ) {
                  this._bodyArrayBuffer = bufferClone(body.buffer);
                  // IE 10-11 can't handle a DataView body.
                  this._bodyInit = new Blob([this._bodyArrayBuffer]);
                } else if (
                  support.arrayBuffer &&
                  (ArrayBuffer.prototype.isPrototypeOf(body) ||
                    isArrayBufferView(body))
                ) {
                  this._bodyArrayBuffer = bufferClone(body);
                } else {
                  this._bodyText = body = Object.prototype.toString.call(body);
                }

                if (!this.headers.get("content-type")) {
                  if (typeof body === "string") {
                    this.headers.set(
                      "content-type",
                      "text/plain;charset=UTF-8"
                    );
                  } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set("content-type", this._bodyBlob.type);
                  } else if (
                    support.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(body)
                  ) {
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    );
                  }
                }
              };

              if (support.blob) {
                this.blob = function () {
                  var rejected = consumed(this);
                  if (rejected) {
                    return rejected;
                  }

                  if (this._bodyBlob) {
                    return Promise.resolve(this._bodyBlob);
                  } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  } else if (this._bodyFormData) {
                    throw new Error("could not read FormData body as blob");
                  } else {
                    return Promise.resolve(new Blob([this._bodyText]));
                  }
                };

                this.arrayBuffer = function () {
                  if (this._bodyArrayBuffer) {
                    return (
                      consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                    );
                  } else {
                    return this.blob().then(readBlobAsArrayBuffer);
                  }
                };
              }

              this.text = function () {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }

                if (this._bodyBlob) {
                  return readBlobAsText(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(
                    readArrayBufferAsText(this._bodyArrayBuffer)
                  );
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as text");
                } else {
                  return Promise.resolve(this._bodyText);
                }
              };

              if (support.formData) {
                this.formData = function () {
                  return this.text().then(decode);
                };
              }

              this.json = function () {
                return this.text().then(JSON.parse);
              };

              return this;
            }

            // HTTP methods whose capitalization should be normalized
            var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function normalizeMethod(method) {
              var upcased = method.toUpperCase();
              return methods.indexOf(upcased) > -1 ? upcased : method;
            }

            function Request(input, options) {
              options = options || {};
              var body = options.body;

              if (input instanceof Request) {
                if (input.bodyUsed) {
                  throw new TypeError("Already read");
                }
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) {
                  this.headers = new Headers(input.headers);
                }
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                  body = input._bodyInit;
                  input.bodyUsed = true;
                }
              } else {
                this.url = String(input);
              }

              this.credentials =
                options.credentials || this.credentials || "same-origin";
              if (options.headers || !this.headers) {
                this.headers = new Headers(options.headers);
              }
              this.method = normalizeMethod(
                options.method || this.method || "GET"
              );
              this.mode = options.mode || this.mode || null;
              this.signal = options.signal || this.signal;
              this.referrer = null;

              if ((this.method === "GET" || this.method === "HEAD") && body) {
                throw new TypeError(
                  "Body not allowed for GET or HEAD requests"
                );
              }
              this._initBody(body);
            }

            Request.prototype.clone = function () {
              return new Request(this, { body: this._bodyInit });
            };

            function decode(body) {
              var form = new FormData();
              body
                .trim()
                .split("&")
                .forEach(function (bytes) {
                  if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(
                      decodeURIComponent(name),
                      decodeURIComponent(value)
                    );
                  }
                });
              return form;
            }

            function parseHeaders(rawHeaders) {
              var headers = new Headers();
              // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
              // https://tools.ietf.org/html/rfc7230#section-3.2
              var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
              preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                  var value = parts.join(":").trim();
                  headers.append(key, value);
                }
              });
              return headers;
            }

            Body.call(Request.prototype);

            function Response(bodyInit, options) {
              if (!options) {
                options = {};
              }

              this.type = "default";
              this.status = options.status === undefined ? 200 : options.status;
              this.ok = this.status >= 200 && this.status < 300;
              this.statusText =
                "statusText" in options ? options.statusText : "OK";
              this.headers = new Headers(options.headers);
              this.url = options.url || "";
              this._initBody(bodyInit);
            }

            Body.call(Response.prototype);

            Response.prototype.clone = function () {
              return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url,
              });
            };

            Response.error = function () {
              var response = new Response(null, { status: 0, statusText: "" });
              response.type = "error";
              return response;
            };

            var redirectStatuses = [301, 302, 303, 307, 308];

            Response.redirect = function (url, status) {
              if (redirectStatuses.indexOf(status) === -1) {
                throw new RangeError("Invalid status code");
              }

              return new Response(null, {
                status: status,
                headers: { location: url },
              });
            };

            exports.DOMException = self.DOMException;
            try {
              new exports.DOMException();
            } catch (err) {
              exports.DOMException = function (message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
              };
              exports.DOMException.prototype = Object.create(Error.prototype);
              exports.DOMException.prototype.constructor = exports.DOMException;
            }

            function fetch(input, init) {
              return new Promise(function (resolve, reject) {
                var request = new Request(input, init);

                if (request.signal && request.signal.aborted) {
                  return reject(
                    new exports.DOMException("Aborted", "AbortError")
                  );
                }

                var xhr = new XMLHttpRequest();

                function abortXhr() {
                  xhr.abort();
                }

                xhr.onload = function () {
                  var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || ""),
                  };
                  options.url =
                    "responseURL" in xhr
                      ? xhr.responseURL
                      : options.headers.get("X-Request-URL");
                  var body =
                    "response" in xhr ? xhr.response : xhr.responseText;
                  resolve(new Response(body, options));
                };

                xhr.onerror = function () {
                  reject(new TypeError("Network request failed"));
                };

                xhr.ontimeout = function () {
                  reject(new TypeError("Network request failed"));
                };

                xhr.onabort = function () {
                  reject(new exports.DOMException("Aborted", "AbortError"));
                };

                xhr.open(request.method, request.url, true);

                if (request.credentials === "include") {
                  xhr.withCredentials = true;
                } else if (request.credentials === "omit") {
                  xhr.withCredentials = false;
                }

                if ("responseType" in xhr && support.blob) {
                  xhr.responseType = "blob";
                }

                request.headers.forEach(function (value, name) {
                  xhr.setRequestHeader(name, value);
                });

                if (request.signal) {
                  request.signal.addEventListener("abort", abortXhr);

                  xhr.onreadystatechange = function () {
                    // DONE (success or failure)
                    if (xhr.readyState === 4) {
                      request.signal.removeEventListener("abort", abortXhr);
                    }
                  };
                }

                xhr.send(
                  typeof request._bodyInit === "undefined"
                    ? null
                    : request._bodyInit
                );
              });
            }

            fetch.polyfill = true;

            if (!self.fetch) {
              self.fetch = fetch;
              self.Headers = Headers;
              self.Request = Request;
              self.Response = Response;
            }

            exports.Headers = Headers;
            exports.Request = Request;
            exports.Response = Response;
            exports.fetch = fetch;

            Object.defineProperty(exports, "__esModule", { value: true });

            return exports;
          })({});
        })(__self__);
        __self__.fetch.ponyfill = true;
        // Remove "polyfill" property added by whatwg-fetch
        delete __self__.fetch.polyfill;
        // Choose between native implementation (global) or custom implementation (__self__)
        // var ctx = global.fetch ? global : __self__;
        var ctx = __self__; // this line disable service worker support temporarily
        exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
        exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
        exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
        exports.Headers = ctx.Headers;
        exports.Request = ctx.Request;
        exports.Response = ctx.Response;
        module.exports = exports;
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;

        var _crossFetch = _interopRequireDefault(require("cross-fetch"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var gsheetsAPI = function gsheetsAPI(_ref) {
          var apiKey = _ref.apiKey,
            sheetId = _ref.sheetId,
            sheetName = _ref.sheetName,
            _ref$sheetNumber = _ref.sheetNumber,
            sheetNumber = _ref$sheetNumber === void 0 ? 1 : _ref$sheetNumber;

          try {
            var sheetNameStr =
              sheetName && sheetName !== ""
                ? encodeURIComponent(sheetName)
                : "Sheet".concat(sheetNumber);
            var sheetsUrl = "https://sheets.googleapis.com/v4/spreadsheets/"
              .concat(sheetId, "/values/")
              .concat(
                sheetNameStr,
                "?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key="
              )
              .concat(apiKey);
            return (0, _crossFetch.default)(sheetsUrl)
              .then(function (response) {
                if (!response.ok) {
                  console.log("there is an error in the gsheets response");
                  throw new Error("Error fetching GSheet");
                }

                return response.json();
              })
              .then(function (data) {
                return data;
              })
              .catch(function (err) {
                throw new Error(
                  "Failed to fetch from GSheets API. Check your Sheet Id and the public availability of your GSheet."
                );
              });
          } catch (err) {
            throw new Error("General error when fetching GSheet: ".concat(err));
          }
        };

        var _default = gsheetsAPI;
        exports.default = _default;
      },
      { "cross-fetch": 2 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;

        var _gsheetsapi = _interopRequireDefault(require("./gsheetsapi.js"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function matchValues(valToMatch, valToMatchAgainst, matchingType) {
          try {
            if (typeof valToMatch != "undefined") {
              valToMatch = valToMatch.toLowerCase().trim();
              valToMatchAgainst = valToMatchAgainst.toLowerCase().trim();

              if (matchingType === "strict") {
                return valToMatch === valToMatchAgainst;
              }

              if (matchingType === "loose") {
                return (
                  valToMatch.includes(valToMatchAgainst) ||
                  valToMatch == valToMatchAgainst
                );
              }
            }
          } catch (e) {
            console.log("error in matchValues: ".concat(e.message));
            return false;
          }

          return false;
        }

        function filterResults(resultsToFilter, filter, options) {
          var filteredData = []; // now we have a list of rows, we can filter by various things

          return resultsToFilter.filter(function (item) {
            // item data shape
            // item = {
            //   'Module Name': 'name of module',
            //   ...
            //   Department: 'Computer science'
            // }
            var addRow = null;
            var filterMatches = [];

            if (
              typeof item === "undefined" ||
              item.length <= 0 ||
              Object.keys(item).length <= 0
            ) {
              return false;
            }

            Object.keys(filter).forEach(function (key) {
              var filterValue = filter[key]; // e.g. 'archaeology'
              // need to find a matching item object key in case of case differences

              var itemKey = Object.keys(item).find(function (thisKey) {
                return (
                  thisKey.toLowerCase().trim() === key.toLowerCase().trim()
                );
              });
              var itemValue = item[itemKey]; // e.g. 'department' or 'undefined'

              filterMatches.push(
                matchValues(itemValue, filterValue, options.matching || "loose")
              );
            });

            if (options.operator === "or") {
              addRow = filterMatches.some(function (match) {
                return match === true;
              });
            }

            if (options.operator === "and") {
              addRow = filterMatches.every(function (match) {
                return match === true;
              });
            }

            return addRow;
          });
        }

        function processGSheetResults(
          JSONResponse,
          returnAllResults,
          filter,
          filterOptions
        ) {
          var data = JSONResponse.values;
          var startRow = 1; // skip the header row(1), don't need it

          var processedResults = [{}];
          var colNames = {};

          for (var i = 0; i < data.length; i++) {
            // Rows
            var thisRow = data[i];

            for (var j = 0; j < thisRow.length; j++) {
              // Columns/cells
              var cellValue = thisRow[j];
              var colNameToAdd = colNames[j]; // this will be undefined on the first pass

              if (i < startRow) {
                colNames[j] = cellValue;
                continue; // skip the header row
              }

              if (typeof processedResults[i] === "undefined") {
                processedResults[i] = {};
              }

              if (
                typeof colNameToAdd !== "undefined" &&
                colNameToAdd.length > 0
              ) {
                processedResults[i][colNameToAdd] = cellValue;
              }
            }
          } // make sure we're only returning valid, filled data items

          processedResults = processedResults.filter(function (result) {
            return Object.keys(result).length;
          }); // if we're not filtering, then return all results

          if (returnAllResults || !filter) {
            return processedResults;
          }

          return filterResults(processedResults, filter, filterOptions);
        }

        var gsheetProcessor = function gsheetProcessor(
          options,
          callback,
          onError
        ) {
          var apiKey = options.apiKey,
            sheetId = options.sheetId,
            sheetName = options.sheetName,
            sheetNumber = options.sheetNumber,
            returnAllResults = options.returnAllResults,
            filter = options.filter,
            filterOptions = options.filterOptions;

          if (!options.apiKey || options.apiKey === undefined) {
            throw new Error("Missing Sheets API key");
          }

          return (0, _gsheetsapi.default)({
            apiKey: apiKey,
            sheetId: sheetId,
            sheetName: sheetName,
            sheetNumber: sheetNumber,
          })
            .then(function (result) {
              var filteredResults = processGSheetResults(
                result,
                returnAllResults || false,
                filter || false,
                filterOptions || {
                  operator: "or",
                  matching: "loose",
                }
              );
              callback(filteredResults);
            })
            .catch(function (err) {
              return onError(err.message);
            });
        };

        var _default = gsheetProcessor;
        exports.default = _default;
      },
      { "./gsheetsapi.js": 3 },
    ],
    5: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;

        var _gsheetsprocessor = _interopRequireDefault(
          require("./gsheetsprocessor.js")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var reader = function reader(options, callback, onError) {
          return (0, _gsheetsprocessor.default)(
            options,
            function (results) {
              callback(results);
            },
            function (error) {
              if (onError) {
                onError(error);
              } else {
                throw new Error("g-sheets-api error: ".concat(error));
              }
            }
          );
        };

        module.exports = reader;
        var _default = reader;
        exports.default = _default;
      },
      { "./gsheetsprocessor.js": 4 },
    ],
  },
  {},
  [1]
);
