"use strict"

// VARIABLES

let myVariable = "nice";
console.log(myVariable);

myVariable = "marvelous!"
console.log(myVariable);

const myNum = 100;
console.log(myNum);

var x;
console.log("значение переменной x", x);   

let someVar;
console.log(someVar);

// ТИПЫ ДАННЫХ - ПРИМИТИВЫ И OBJECTS

// *** оператор typeof ****

console.log(typeof maVar);
console.log(typeof myVariable);
console.log(typeof myNum);

// STRING
//если в кавычках - сразу строка 
//(даже если буль, null, undefined)

let myStringValue = "";
console.log(typeof myStringValue);
console.log(myStringValue);

myStringValue = "  "
console.log(myStringValue);
console.log(typeof myStringValue);

myStringValue = "Nada"
console.log(typeof myStringValue);

// NUMBER

// Cам факт изменения переменной это уже слабая типизация,
// JS слаботипизованный, динамический язык, динамическая типизация
// Nan получаем когда переобразовываем (строку) в число - 
// это значение говорит: не получилось переобразовать в число

let numberValue = 1;
console.log(numberValue);
console.log(typeof numberValue);

numberValue = NaN;
console.log(numberValue);
console.log(typeof numberValue);

numberValue = Infinity;
console.log(numberValue);
console.log(typeof numberValue);

// BOOLEAN

let boolValue = true;
console.log(boolValue);
console.log(typeof boolValue);

boolValue = false;
console.log(boolValue);
console.log(typeof boolValue);

// UNDEFINED 
// это значение по умолчанию когда не присвоено значения 
// для переменной которая была раньше объявлена 
// с помощью ключевого слова let
// ниже значение и тип данных переменной terra совпадают: undefined

let terra
console.log(terra);
console.log(typeof terra);

// NULL
// специально допущенная ошибка в JS, идет как тип данных object 
// но является примитивом, иногда ипользуется как заглушка для пороекта 

let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);

// ВЗАМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ
// эти команды принадлежат браузеру
// блокируют выполнения кода

//результатом alert будет ничего - underfined.
// let answer = alert("Привет пользователь!");
// console.log("hello", answer);

// даем право выбора, результатом confirm будет буль
// let answer = confirm("How was your day?");
// console.log(answer);

// что-то ввести, результат будет null, если нажали омена 
// или какое-то строчное значение
// let answer = prompt("Enter your info");
// console.log(answer);


// ОСНОВНЫЕ ОПЕРАТОРЫ

// МАТЕМАТИЧЕСКИЕ

let result = 2 % 3;
// console.log(result);
// то что не получилось нацело разделить
// результат 2 потому что, сколько целых 3 помещается в 2 ?
// ни одного, значит: 2 - 0 = 2


// СРАВНЕНИЯ (>=, <=, >, <, == & ===, != & !==)

let num1 = 2;
let num2 = 4;

result = num1 > num2;
console.log(result);

let newNum1 = "2";
let newNum2 = 2;
let newResult;

// строчная двойка и числовая двойка не строго равны, 
// потому что переобразовывается тип данных, кавычки отбрасываются 
newResult = newNum1 == newNum2;
console.log(newResult);

newResult = newNum1 != newNum2;
console.log(newResult);

newResult = newNum1 !== newNum2;
console.log(newResult);


// МЕТОД Number.parseInt()  & Number.parseFloat()
// с помощью которого мы можем взять число из **строчного значения,
// но только в том случае если оно начинается с числа

let num = Number.parseInt("3.14px");
console.log(num, typeof num);

num = Number.parseFloat("3.14px");
console.log(num, typeof num);

// суммирование дробей в JS

// 0.1 + 0.2 !=0.3 из-за двоичной системы исчисления

let sum = (0.1 * 10 + 0.2 *10) / 10;
console.log(sum);


// Number.isNaN() 




// Цикл for, выведем остаток от деления используя цикл for

const max = 10;
for (let i = 0; i < max; i += 1) {
    console.log(`${max} % ${i} = `, max % i);
}

// statement (инструкция) break and continue 

for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
        console.log(`Дошли до 5-й итерации, перерываем цикл !`);
        break;
    }
} 