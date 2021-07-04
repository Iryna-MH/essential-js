/* сделать слаг из названия статьи
заголовок статьи состоит только из букв и пробелов
1. нормализовать строку
2. разбить по словам
3. сшить в строку с разделителями
 */

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// chain - не на тайтле вызывается split and join, 
// а на результате работы предыдущего метода. 
// Это назыв. декларативный код(абстракции)

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// FUNCTION

// const slugify = function (string) {
//     const normalizedString = string.toLowerCase();
//     const words = normalizedString.split(' ');
//     const slug = words.join(' ');
//     return slug;
// };

// console.log(slugify('Technical writting tips for non-native English speakers'));




/* Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, 
если число положительное, и false - если отрицательное.
 */

const arr = [1, 2, 3, -1, -2, -3, 70];

const isPositive = function( number){

    if ( number >= 0) {
        return true;
    }
    else {
        
        return false;
    }
}
    
const positiveNumber = [];

for (const num of arr) {
if (isPositive(num)) {
 positiveNumber.push(num);   
}
}

console.log(positiveNumber);



/*
 * Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
 */

const arr = [[1, 2, 3], [4, 5], [6]];



/*
 * Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
 * Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать ркгистр, пробелы и знаки препинания.
 */

const palindrome = string => {};


/*
 * Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
 * Гласными являются «a», «e», «i», «o», «u».
 */


