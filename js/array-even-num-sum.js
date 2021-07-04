// сумма парных чисел

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18];

// 1 переменная тотал
let total = 0;

// 2 перебрать массив

for (let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);


//  3 на каждой итерации проверить элемент на четность
if(numbers[i] % 2 === 0){
    console.log("even number:" + numbers[i]);

    // если число четное - плюсуем к тотал
    total += numbers[i];
}
}

console.log("Total: " , total);

// Логика от обратного

for (const number of numbers) {
    if(number % 2 !== 0 ) {
        console.log("skip this iteration" , number);
        continue
    }

    console.log(`${number} - even!!!`);
    total += number;
}

console.log("Total:" , total);