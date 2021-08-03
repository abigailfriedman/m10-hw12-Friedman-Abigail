// YOUR CODE HERE
class Car {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("BEEP BEEP!")
    }

    performanceMaintenance() {setTimeout(function() {
    console.log("maintenance complete")
  }, 3000);
}

}