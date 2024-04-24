//object manipulation in javascript with the filter method
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 14 },
];

function processData(people) {
   
   return people.filter(person => person.age >= 18);
  

  
}

const result = processData(people);
console.log(result);
