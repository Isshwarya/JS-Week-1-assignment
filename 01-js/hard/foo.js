function foo() {
  console.log("foo called at " + new Date().today());
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeout(foo, 3 * 1000);

const repeatedGreetings = async () => {
  await sleep(1000);
  console.log("First");
  await sleep(1000);
  console.log("Second");
  await sleep(1000);
  console.log("Third");
  await sleep(1000);
  console.log("Third");
  await sleep(1000);
  console.log("Third");
  await sleep(1000);
  console.log("Third");
  await sleep(1000);
  console.log("Third");
};

//repeatedGreetings();

// For todays date;
Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};

// For the time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};

for (var i = 0; i < 400; i++) {
  sum = 0;
  for (var j = 0; j < 10000000; j++) {
    sum = sum + j;
  }
  console.log(
    `${i} ${j} sum done inner loop ` +
      new Date().today() +
      " @ " +
      new Date().timeNow()
  );
}
console.log("sum done");
