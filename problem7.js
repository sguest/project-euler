let target = 10001;
let found = 0;
let current = 1;

main:
while(found < target) {
    current++;
    let sqrt = Math.sqrt(current);

    for(let factor = 2; factor <= sqrt; factor++) {
        if(current % factor === 0) {
            continue main;
        }
    }
    found++;
}

console.log(current);