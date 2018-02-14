var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function writeNumber(num) {
    if(num === 1000) {
        return 'onethousand';
    }

    if(num >= 100) {
        let hundred = writeNumber(Math.floor(num / 100));
        let tens = writeNumber(num % 100);
        let value = hundred + 'hundred';
        if(tens) {
            value += 'and' + tens;
        }
        return value;
    }

    if(num >= 20) {
        return tens[Math.floor(num / 10)] + ones[num % 10];
    }

    if(num >= 10) {
        return teens[num - 10];
    }

    return ones[num];
}

let count = 0;
let target = 1000;

for(let num = 1; num <= target; num++) {
    count += writeNumber(num).length;
}

console.log(count);