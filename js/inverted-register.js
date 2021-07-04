/* Напиши скрипт которы заменяет регистр каждого 
символа в строке на противоположный. */

// const string = "IamGlaDtOseEyoU";

// solution "old school"

// const letters = string.split('');
// console.log(letters);
// let invertedString = "";

// for(const letter of letters){
//     console.log(letter);

    // if(letter === letter.toLowerCase()){
    //     console.log("This letter is in lower case -" , letter);
    //     invertedString += letter.toUpperCase();
    // } else {
    //     console.log("This letter is in upper case -" , letter);
    //     invertedString += letter.toLowerCase();
    // }

    // через тернарный оператор

//     invertedString += letter === letter.toLowerCase()
//     ? letter.toUpperCase()
//     :letter.toLowerCase();

// console.log("invertedString: " , invertedString);

// and function !

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
    ? letter.toUpperCase()
    : letter.toLowerCase();

    }

    return invertedString;
}

console.log(changeCase('qwdkVByT'));
console.log(changeCase('NFTvhReQm'));