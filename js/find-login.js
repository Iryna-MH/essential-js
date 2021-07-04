// нужно найти логин в этом массиве.

const logins = ['login-1', 'login-2', 'login-3', 'login-4'];
// const loginToFind = 'Login-3';
// const message = logins.includes(loginToFind)
// ? 'User ${loginToFind} was found.'
// : 'User ${loginToFind} was not found';
// console.log(message);


// Return по условию; множественный return;

// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins){
//         if (login === loginToFind) {
//             return `User ${loginToFind} was found.`;
//         }
//     }
// return `User ${loginToFind} was not found`;
// }

// тернарник - это одно большое выражение

const findLogin = function (allLogins, loginToFind){
    return allLogins.includes (loginToFind)
    ? `User ${loginToFind} was found.`
    : `User ${loginToFind} was not found`;
};
false ? 1 : 2; // 2
true ? 1 : 2; // 1
console.log(findLogin(logins, 'Login-3'));
console.log(findLogin(logins, 'mskkd9jfj'));
console.log(findLogin(logins, 'login-4'));