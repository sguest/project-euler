let target = 1000;
let sum = 0;

for(let num = 1; num < target; num++) {
    if(num % 3 === 0 || num % 5 === 0) {
        sum += num;
    }
}

console.log(sum);