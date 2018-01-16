let target = 4000000;
let last = 1;
let current = 2;
let sum = 2;

while(current <= target) {
    let next = current + last;
    if(next % 2 === 0) {
        sum += next;
    }
    last = current;
    current = next;
}

console.log(sum);