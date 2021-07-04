const calculateTotalPrice = function (items) {
    console.log('items inside function:' , items);

    let total = 0;
    for (const item of items ) {
        total += item;
    }
return total;
};

console.log(calculateTotalPrice([10, 10, 10]));