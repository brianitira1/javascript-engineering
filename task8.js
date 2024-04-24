// map method and callbacks in javascript

const calculateAreaOfCirlces = (numbers) => {

    return numbers.map((number) => {
        return Math.PI * (number * number);
    })

}

let numbers = [1, 2, 3];
const results = calculateAreaOfCirlces(numbers);
console.log(results);