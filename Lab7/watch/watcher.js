const fs = require('fs');
const dir = process.argv[2];
let wait = false;
fs.watch(dir, {recursive:true}, (eventType, filename) => {
    if(eventType == 'change') {
        if(wait) return;
        wait = setTimeout(() => wait = false, 1000);
        path = dir + "\/" + filename;
        console.log(path);
        fs.readFile(path, 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
            console.log(`Change in file: ${path}`);
            console.log(`Content: ${data}`);
          });
    }
  });