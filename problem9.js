let target = 1000;

main:
for(let a = 1; a < target; a++) {
    for(let b = a + 1; b < target; b++) {
        for(let c = b + 1; c < target; c++) {
            if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && a + b + c === 1000) {
                console.log(a * b * c);
                break main;
            }
        }
    }
}