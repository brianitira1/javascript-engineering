//spread operator and map method in javascript
const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 32, city: "Los Angeles" },
  { name: "Charlie", age: 18, city: "Chicago" },
];
function extractInfo(people) {
  return people.map(({ name, age, ...rest }) => `Name: ${name}, Age: ${age}`);
}

const result = extractInfo(people);
console.log(result);
