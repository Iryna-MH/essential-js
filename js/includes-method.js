const logins = ["qwer1" , "qwer2" , "qwer3" , "qwer4"];
const loginToFind = "qwer3";
const message = logins.includes(loginToFind)
? `User ${loginToFind} was found.`
: `User ${loginToFind} was not found.`;

console.log(message);


// напиши скрипт  поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяются)

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log("smallest number: " , smallestNumber);

/* Напиши скрипт, который объединяет все элементы массива 
в одно строковое значение.
* Элементов может быть произвольное кол-во;
* Пусть элементы массива в строке будут разделены запятой
* Сначала через for
* Потом через joint()
*/

const partners = ["Kira", "Mira", "Fira", "Tira"];
// let string = "";
// for(const partner of partners) {
//     string += partner + ",";
// }

// // это чтобы удалить кому в конце строки
// string = string.slice(0, string.length - 1);

const string = partners.join(" , ");
console.log(partners);
console.log(string);
