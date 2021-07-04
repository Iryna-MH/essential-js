// примитивы сравниваються и опируються по значению, 
// сложные типы данных (массивы, функции, объекты)
// копируються и спавниваються по ссылке. 

// перебор (итерация) массива
// * - for - если нужен индекс или нужно изменить элемент массива;
// * - for ... of - если индекс не нужен и в массиве ничего
// менять не нужно 

const friends = ["Vango" , "Kivi" , "poly" , "Ajax" , "bada"];
console.table(friends);

// длина массива и индекс последнего элемента
const lastIndex = friends.length - 1;

for(let i = 0; i <= lastIndex; i += 1){
    console.log(friends[i]);
    // обращение к каждому элементу массива 
    // (к ячеки памяти) на итерации
}

// используеться локальная переменная friend = friends[i]
for (const friend  of friends){
    console.log(friend);
}

// задача: Посчитать общую сумму покупок в корзине
const cart = [54, 28, 105, 70, 92, 17, 120];

console.log(cart.length);
let total = 0;
// 1. перебрать массив
for(let i = 0; i < cart.length; i += 1){
    console.log(cart[i]);

    total +=cart[i];
}
console.log("Total: " , total);

// 2. сделать переменную тотал до цикла


// 3. каждый элемент приплюсовать к тотал

// то же самое через for of
for (const value of cart) {
    total += value;
}
console.log("Total: " , total);

// Добавить такс

for (let i = 0; i < cart.length; i += 1){
    cart[i] = Math.round(cart[i] * 1.1);
}

console.log(cart);