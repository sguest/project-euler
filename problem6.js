let target = 100;

let nums = [];

for(let index = 1; index <= target; index++) {
    nums.push(index);
}

console.log(Math.pow(nums.reduce((a, b) => a + b), 2) - nums.reduce((a, b) => a + Math.pow(b, 2)));