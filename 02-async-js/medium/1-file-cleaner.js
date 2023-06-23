/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```*/

const fs = require("fs");
function fileIsRead(err, content) {
  if (err) {
    console.log("Error in reading file: ", err);
    return;
  }
  //console.clear();
  console.log(content);
}
//fs.readFile("medium/sample.txt", "UTF-8", fileIsRead);

var filePath = "medium/original.txt";

var fd = fs.openSync(filePath, "r");
var bufferSize = 1024;
var buffer = Buffer.alloc(bufferSize);

var leftOver = "";

function processAndWriteLine(line) {
  console.log(line);
  line = line.replace(/\s+/g, " ") + "\n";
  fs.writeFile("medium/updated.txt", line, { flag: "a+" }, (err) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    }
  });
}
var read, line, idxStart, idx;
while ((read = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
  leftOver += buffer.toString("utf8", 0, read);
  console.log(leftOver);
  idxStart = 0;
  while ((idx = leftOver.indexOf("\n", idxStart)) !== -1) {
    line = leftOver.substring(idxStart, idx);
    processAndWriteLine(line);
    idxStart = idx + 1;
  }
  leftOver = leftOver.substring(idxStart);
  processAndWriteLine(leftOver);
}
