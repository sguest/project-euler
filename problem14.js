let start = 1;
let maxLength = 1;
let maxStart = 1;

while(start < 1000000) {
    start++;

    let current = start;
    let length = 1;

    while(current !== 1) {
        if(current % 2) {
            current = 3 * current + 1;
        }
        else {
            current /= 2;
        }
        length++;
    }

    if(length > maxLength) {
        maxLength = length;
        maxStart = start;
    }
}

console.log(maxStart);