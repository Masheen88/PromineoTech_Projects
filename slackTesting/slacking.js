console.log("123");

const mattTestingToken =
  "xapp-1-A04B8BQCLD8-4395115413649-2c4b8e14ae4378965ec95daa0569e3001f2566b0b7e0cfcc6fc8087e1ee689bb";

//get data from xapp-1-A04B8BQCLD8-4395115413649-2c4b8e14ae4378965ec95daa0569e3001f2566b0b7e0cfcc6fc8087e1ee689bb

const axios = require("axios");

axios
  .get("https://slack.com/api/users.list", {
    headers: {
      Authorization: `Bearer ${mattTestingToken}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  });

console.log("hello world");
