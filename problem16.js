let nums = [2];
let power = 1000;

for(let count = 2; count <= power; count++) {
    let carries = [];
    for(let index = 0; index < nums.length; index++) {
        let temp = nums[index] * 2;
        nums[index] = temp % 10;
        if(temp >= 10) {
            carries[index + 1] = 1;
        }
    }

    for(let index = 0; index < carries.length; index++) {
        nums[index] = (nums[index] || 0) + (carries[index] || 0);
    }
}

console.log(nums.reduce((a, b) => a + b));