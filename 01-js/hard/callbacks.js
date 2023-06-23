function sum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  console.log(sum);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fileIsRead(err, fileContent) {
  if (err) {
    console.log("file read resulted in error: " + err);
    return;
  }
  var ans = sum(fileContent);
  console.log("file is read, sum is " + ans);
}

const fs = require("fs");

fs.readFile("chocholate.txt", "utf8", fileIsRead);

sleep(10000); // non-blocking sleep
console.log("5 sec sleep completed");
sum(1000);
sum(100000);
sum(200000);

const repeatedGreetings = async () => {
  await sleep(5000);
  console.log("First");
  await sleep(5000);
  console.log("Second");
  await sleep(5000);
  console.log("Third");
};

repeatedGreetings();

//setTimeout(foo, 7000);
