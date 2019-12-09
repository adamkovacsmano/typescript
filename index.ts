const welcomeFunc = (names: Array<string>) => {
  names.forEach(name => {
    console.log(`hello ${name}`);
  });
};

welcomeFunc(["Yello", "Craig", "Shae"]);

const sumAllNumbersInArray = (numbers: number[]) => {
  let output: number = 0;
  numbers.forEach(number => {
    output += number;
  });
  return output;
};

console.log(sumAllNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
