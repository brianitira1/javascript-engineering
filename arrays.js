const numbers = [5, 10, 15, 20, 25];
console.log(numbers[2]);
numbers[1] = 2;
numbers.push(30);
numbers.splice(0, 1);

console.log(numbers);

// for loop

const arraySum = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
};


const nums = [5, 10, 15, 20, 25];
console.log(arraySum(nums));

//array iteration

//for each


const names = ['brian', 'david', 'john'];

names.forEach((name) => {
  console.log(name);
});

//map

const arraynums = [2, 4, 5]

const  squareNums = arraynums.map((arraynum) => {
    return arraynum * arraynum
})

console.log(squareNums);

//filter

const numbersgreaterthanthree = [1, 2, 3, 4, 5];

const onlynumbersgreaterthanthree = numbersgreaterthanthree.filter((numbergreaterthanthree) => {

    return numbergreaterthanthree > 3;
})

console.log(onlynumbersgreaterthanthree);


//reduce


const arraytogetproduct = [1, 2, 3, 4, 5];

const product = arraytogetproduct.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(product); 

//matrices

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const matrixSum = (matrix) => {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
      }
    }
    return sum;
  };
  
  console.log(matrixSum(matrix));


  // array destructuring

  const colorsarray = ['white', 'blue', 'black', 'green'];

  const [firstcolor, secondcolor] = colorsarray
  console.log(firstcolor, secondcolor)


  const arraymanipulation = [4, 8, 9, 3, 5];
  const arraymanipulationwithnumbers =(arraymanipulationwithnumbersparam)=> {
    const newarray = arraymanipulationwithnumbersparam.splice(0, 3);
    newarray.push(11, 12)
    return newarray;

  }

  console.log(arraymanipulationwithnumbers(arraymanipulation));