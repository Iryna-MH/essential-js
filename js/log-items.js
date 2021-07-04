/* напиши функцию logItems(items) для перебора
и логирования масива
*/

const LogItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
};

LogItems(['Mango' , 'Kiwi' , 'Poly']);
LogItems([1, 2, 3, 4]);
LogItems(['keyboard' , 'headphones','watch']);