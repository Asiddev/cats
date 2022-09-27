// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, printData) {
  console.log("breedDetailsFromFile: Calling readFile...");

  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.

    if (error) {
      return printData(undefined);
    }
    printData(data);
  });
};

module.exports = breedDetailsFromFile;
