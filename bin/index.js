#!/usr/bin/env node

//hello 10 Usage mushroom 33 -1 trash 2229 mustard juice

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exit = () => {
  console.log("Good bye! Come back again!");
  process.exit();
};

const recursiveAsyncRl = () => {
  rl.question(
    `Hello. Enter 10 words or digits dividing them in spaces:\n`,
    (str) => {
      if (str === "exit") exit();
      const arr = str.trim().split(" ");
      const words = arr.filter((elem) => isNaN(elem));
      const digits = arr.filter((elem) => !isNaN(elem)).map((elem) => +elem);

      rl.question(
        `How would you like to sort values?
        1. Words by name (A-Z).
        2. Show digits from the smallest.
        3. Show digits from the biggest.
        4. Words by quantity of letters.
        5. Only unique words.
        6. Only unique values from original string.\nSelect (1-6) and press ENTER:\n`,
        (num) => {
          if (num === "exit") exit();
          switch (+num) {
            case 1:
              console.log(words.sort());
              break;
            case 2:
              console.log(digits.sort((a, b) => a - b));
              break;
            case 3:
              console.log(digits.sort((a, b) => b - a));
              break;
            case 4:
              console.log(words.sort((a, b) => a.length - b.length));
              break;
            case 5:
              console.log(Array.from(new Set(words)));
              break;
            case 6:
              console.log(Array.from(new Set(arr)));
              break;
            default:
              break;
          }
          recursiveAsyncRl();
        }
      );
    }
  );
};

recursiveAsyncRl();
