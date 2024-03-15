class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayInfo() {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  
    start() {
      return `${this.make} ${this.model} starts...`;
    }
  
    stop() {
      return `${this.make} ${this.model} stops.`;
    }
  }
  

  class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
      super(make, model, year);
      this.batteryCapacity = batteryCapacity;
    }
  
    displayInfo() {
      return `${super.displayInfo()}, Battery Capacity: ${this.batteryCapacity} kWh`;
    }
  
    charge() {
      return `${this.make} ${this.model} is charging...`;
    }
  }

  class HybridCar extends Car {
    constructor(make, model, year, gasMileage) {
      super(make, model, year);
      this.gasMileage = gasMileage;
    }
  
    displayInfo() {
      return `${super.displayInfo()}, Gas Mileage: ${this.gasMileage} mpg`;
    }
  
    fuel() {
      return `${this.make} ${this.model} is fueling...`;
    }
  }
  

  class SportsCar extends Car {
    constructor(make, model, year, topSpeed) {
      super(make, model, year);
      this.topSpeed = topSpeed;
    }
  
    displayInfo() {
      return `${super.displayInfo()}, Top Speed: ${this.topSpeed} mph`;
    }
  
    accelerate() {
      return `${this.make} ${this.model} accelerates to ${this.topSpeed} mph!`;
    }
  }
  
  const cars = [
    new ElectricCar("Tesla", "Model S", 2023, 100),
    new HybridCar("Toyota", "Prius", 2022, 50),
    new SportsCar("Ferrari", "488 GTB", 2024, 205)
  ];
  
  for (let car of cars) {
    console.log(car.displayInfo());
    console.log(car.start());
  
    if (car instanceof ElectricCar) {
      console.log(car.charge());
    } else if (car instanceof HybridCar) {
      console.log(car.fuel());
    } else if (car instanceof SportsCar) {
      console.log(car.accelerate());
    }
  
    console.log(car.stop());
    console.log("-----------------------");
  }
  