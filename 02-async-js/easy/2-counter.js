// Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;
function startCounter() {
  function increment() {
    counter += 1;
    setTimeout(increment, 1000);
  }
  increment();
}

function getCounter() {
  console.log(counter);
}

startCounter();
setInterval(getCounter, 500);
