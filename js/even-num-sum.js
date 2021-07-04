// 1 variables
const min = 5;
const max = 10;
let total = 0;

// for from min to max with step one

for (let i = min; i <= max; i += 1) {
//логика от обратного 
    if ( i % 2 !== 0 ) {
        console.log("odd number: " , i);
        continue;
    }

    console.log("even number: " , i );
    total += i;
}

// add to total

console.log("total:" , total);