/* Arguments is an Array-like object 
ccessible inside functions that contains 
the values of the arguments passed to that function */

// const fn = function (a, b, c, ...args){
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// };

// fn('hello', 1, 2 ,3);
// fn('aloha', 1, 2, 3, 4);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// Напиши функцию add для сложения произвольного количества
// аргументов(чисел)
// Операция ...(rest)

// const add = function (...args){
//     console.log(args);
//     let total = 0;
//     for(const arg of args) {
//         total += arg;
//     }
//     return total;
// }

// console.log(add(4, 5, 1));
// console.log(add(89, 23, 5, 31, 45));

/* Напиши функцию filterNumbers(array [, number1, ...]) 
которая:
- первым аргументом принимает массив чисел
- после первого аргумента может быть произвольное
количество других аргументов которые будут числами
- функция должна вернуть новый массив, в котором 
будут только те аргументы, начиная со второго,  
для которых есть аналог в оригинальном массиве */

// const filterNumbers = function (array, ...args){
//     console.log('array: ', array);
//     console.log('args: ', args );
//     const uniqueElements = [];

//     for(const element of array){
//         if (args.includes(element)){
//             uniqueElements.push(element);

//             console.log(`${element} is in both arrays!`);
//         }
//     }
// return uniqueElements;

// };

// console.log(filterNumbers([10, 40, 2,], 7, 40, 5, 56));



