let target = 20;
let current = 11;

main:
while(true) {
    for(let index = 1; index <= target; index++) {
        if(current % index) {
            current++;
            continue main;
        }
    }

    break;
}

console.log(current);