//higher order functions

function processData(input, filterFunc, mapFunc) {
  const filteredNumbers = filterFunc(input);
  const processedNumbers = mapFunc(filteredNumbers);
  return processedNumbers;
}

const isEven = (input) => {
  return input.filter((number) => {
    return number % 2 === 0;
  });
};

const squareNumber = (numbers) => {
  return numbers.map((number) => number * number);
};

const input = [1, 2, 3, 4, 5];
console.log(processData(input, isEven, squareNumber));
