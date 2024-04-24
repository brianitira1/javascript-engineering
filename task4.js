//methods in javascript

const counter = {
  count: 0,

  increment: function () {
    return ++this.count;
  },

  decrement: function () {
    return --this.count;
  },

  getValue: function () {
    return this.count;
  },
};

console.log(counter.getValue()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
 