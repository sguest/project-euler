let fs = require('fs');
let path = require('path');

fs.readFile(path.join(__dirname, 'input13.txt'), 'utf-8', (err, data) => {
    let lines = data.trim().split('\n').map(x => x.trim());

    let sum = 0;
    for(let magnitude = 0; magnitude < 5; magnitude++) {
        for(let line of lines) {
            let lineVal = parseInt(line.substring(line.length - 10 * (magnitude + 1), line.length - 10 * magnitude));
            sum += lineVal;
        }

        if(magnitude < 4) {
            sum = Math.floor(sum / 1e10);
        }
    }

    console.log(sum.toString().substring(0, 10));
});