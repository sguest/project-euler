let target = 500;
let currentNumber = 0;
let nextAddition = 1;

while(true) {
    currentNumber += nextAddition;
    nextAddition++;

    let sqrt = Math.sqrt(currentNumber);
    let numFactors = 2; //1 and number itself

    for(let factor = 2; factor <= sqrt; factor++) {
        if(currentNumber % factor === 0) {
            if(factor === sqrt) {
                numFactors++;
            }
            else {
                numFactors += 2;
            }
        }
    }

    if(numFactors > target) {
        console.log(currentNumber);
        break;
    }
}