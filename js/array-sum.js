// Напиши скрипт который считает 
// сумму элементов двух массивов

const array1 = [5, 10, 15, 20];
const array = [10, 20, 30];
let total = 0;

// сшиваем два масива в один методом сoncat,
// перебираем результирующий масив.
const numbers = array1.concat(array2);
console.log(numbers);

for(const number of numbers) {
    total += number;
}

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }
// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }

console.log(total);