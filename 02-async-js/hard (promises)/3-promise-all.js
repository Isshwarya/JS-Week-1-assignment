/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

function waitOneSecond() {
  return wait(1);
}

function waitTwoSecond() {
  return wait(2);
}

function waitThreeSecond() {
  return wait(3);
}

async function calculateTime() {
  p1 = waitOneSecond();
  p2 = waitTwoSecond();
  p3 = waitThreeSecond();
  startTime = new Date().getTime();
  await Promise.all([p1, p2, p3]);
  endTime = new Date().getTime();
  console.log((endTime - startTime) / 1000);
}

calculateTime();
