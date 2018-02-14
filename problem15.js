let width = 20;
let height = 20;

let counts = {};
counts[width + ',' + height] = 1;

for(let x = width; x >= 0; x--) {
    for(let y = height; y >= 0; y--) {
        let count = 0;
        if(x < width) {
            count += counts[(x + 1) + ',' + y];
        }
        if(y < height) {
            count += counts[x + ',' + (y + 1)];
        }
        if(count) {
            counts[x + ',' + y] = count;
        }
    }
}

console.log(counts['0,0']);