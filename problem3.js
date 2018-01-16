let target = 600851475143;
let factors = [];
let current = target;

main:
while(current > 1) {
    for(let factor = 2; factor <= current; factor++) {
        if(current % factor === 0) {
            factors.push(factor);
            current /= factor;
            continue main;
        }
    }
}

console.log(Math.max(...factors));