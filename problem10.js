let target = 2000000;
let sum = 0;

main:
for(let index = 2; index < target; index++) {
    let sqrt = Math.sqrt(index);

    for(let factor = 2; factor <= sqrt; factor++) {
        if(index % factor === 0) {
            continue main;
        }
    }

    sum += index;
}

console.log(sum);