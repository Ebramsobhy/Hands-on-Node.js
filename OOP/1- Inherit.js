// Inherit properties and methods before ES6

function Car(name, model){
    this.name = name;
    this.model = model;
}

Car.prototype.start = function(){
    console.log(`${this.name} (${this.model}) starts the engine.`)
}

function ElectricCar(name, model, battery){
    Car.call(this, name, model);
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype)
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function(){
    console.log(`${this.name} (${this.model}) is charging`);
}

let car1 = new Car("BMW", "X7");
let car2 = new ElectricCar("Tesla", "Model 3", "85 kWh");

car1.start();
car2.start();
car2.charge()