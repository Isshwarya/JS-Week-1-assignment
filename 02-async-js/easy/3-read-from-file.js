/* Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. */

const fs = require("fs");
function fileIsRead(err, content) {
  if (err) {
    console.log("Error in reading file: ", err);
    return;
  }
  //console.clear();
  console.log(content);
}
fs.readFile("easy/1-counter.js", "UTF-8", fileIsRead);
var i = 0;
for (i; i < 1000; i++) {
  console.log(i);
}
