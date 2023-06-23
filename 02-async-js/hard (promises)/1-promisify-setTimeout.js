/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

async function test() {
  console.log("start");
  await wait(5);
  console.log("end");
}

require("console-stamp")(console, "[HH:MM:ss.l]");
test();
