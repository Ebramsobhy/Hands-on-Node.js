// Inherit properties and methods after ES6

class Car{
    constructor(name, model){
       this.name = name;
       this.model = model;
    }

    start(){
        console.log(`${this.name} ${this.model} starts engine.`);
    }
}

class ElectricCar extends Car {
    constructor(name, model, battery){
        super(name, model);
        this.battery = battery;
    }

    charge(){
        console.log(`${this.name} ${this.model} charging.`);
    }
}

let car1 = new Car("BMW", "X7");
let car2 = new ElectricCar("Tesla", "Model 3", "85 kWh");

car1.start();
car2.start();
car2.charge()