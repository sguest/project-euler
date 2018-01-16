let min = 100;
let max = 999;

let largest = 0;

for(let num1 = min; num1 <= max; num1++) {
    for(let num2 = num1 + 1; num2 <= max; num2++) {
        let product = num1 * num2;
        let productString = product.toString();
        let productReverse = productString.split('').reverse().join('');
        if(productString === productReverse) {
            largest = Math.max(largest, product);
        }
    }
}
console.log(largest);