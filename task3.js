//objects in javascript
const car = {
    make: 'bmw',
    model: 'm5',
    year: 2022,
    mileage: 600,
    displayDetails: function() {
        console.log(`this is a ${this.year}${this.make} with a mileage of ${this.mileage}`)
    }
}

car.displayDetails();
