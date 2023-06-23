/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let sum = 0;
  let startTime = new Date().getTime();
  // Array.from(Array(10).keys()).forEach((i)=>{console.log(i)})
  // [...Array(10).keys()].forEach((i)=>{console.log(i)})
  for (let i = 1; i <= n; i++) {
    // setTimeout(callback, 1 * 1000)
    sum += i;
  }

  let endTime = new Date().getTime();
  return endTime - startTime;
}

if (typeof require !== "undefined" && require.main === module) {
  console.log(calculateTime(1000000));
  // console.clear()
  console.log(calculateTime(100000));
  console.log(calculateTime(200));
}
