/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const fs = require("fs");

content = "This is great story";
fs.writeFile("easy/5-foo.txt", content, { flag: "a+" }, (err) => {
  if (err) {
    console.log(err);
    throw new Error(err);
  }
});
