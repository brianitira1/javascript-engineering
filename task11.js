function Shape(width, height) {
  this.width = width;
  this.height = height;

  Shape.prototype.calculateArea = function () {
    return this.width * this.height;
  };
}

function Rectangle(width, height) {
  Shape.call(this, width, height);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const Area = {
  calculate: function (shape) {
    return shape.calculateArea();
  },
};

const rectangle = new Rectangle(5, 20);
console.log(Area.calculate(rectangle));
