/**Part One */
class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return `Beep!`;
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }

}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);



/**Part Two */
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4; // adding new base variables
    }
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);



/**Part Three */
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return `VROOM!`;
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);



/**Part Four */
class Garage {
    constructor (capacity) {
        this.vehicles = []; // when creating data structors, don't add to constructor parameter
        this.capacity = capacity;
    }

    add(newItemToGarage) {
        if (!(newItemToGarage instanceof Vehicle)) { // check if there's an instance of Vechile -> either a Car or Motorcycle, since thats all we want
            return `Only vehicles please`;
        }

        if (this.vehicles.length >= this.capacity) { // check if array is filled
            return `Garage is currently full`;
        }

        this.vehicles.push(newItemToGarage);
        return `A vechile has been added`;
    }
}