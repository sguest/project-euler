let fs = require('fs');
let path = require('path');

fs.readFile(path.join(__dirname, 'input11.txt'), 'utf-8', (err, data) => {
    let grid = [];
    let max = 0;

    for(let line of data.trim().split('\n')) {
        grid.push(line.split(' '));
    }

    for(let x = 0; x < grid.length - 4; x++) {
        for(let y = 0; y < grid[0].length - 4; y++) {
            let verticalProduct = 1;
            let horizontalProduct = 1;
            let diagonalProduct1 = 1;
            let diagonalProduct2 = 1;

            for(let delta = 0; delta < 4; delta++) {
                verticalProduct *= grid[x][y + delta];
                horizontalProduct *= grid[x + delta][y];
                diagonalProduct1 *= grid[x + delta][y + delta];
                diagonalProduct2 *= grid[x + 3 - delta][y + delta];
            }

            max = Math.max(max, verticalProduct, horizontalProduct, diagonalProduct1, diagonalProduct2);
        }
    }

    console.log(max);
});