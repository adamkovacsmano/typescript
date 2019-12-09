"use strict";
const welcomeFunc = (names) => {
    names.forEach(name => {
        console.log(`hello ${name}`);
    });
};
welcomeFunc(["Yello", "Craig", "Shae"]);
const sumAllNumbersInArray = (numbers) => {
    let output = 0;
    numbers.forEach(number => {
        output += number;
    });
    return output;
};
console.log(sumAllNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
