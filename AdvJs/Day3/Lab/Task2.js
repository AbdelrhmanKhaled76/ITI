
function Vehicle(speed, color) {
    // Data type validation
    if (typeof speed !== 'number' || typeof color !== 'number') {
        throw new Error("Invalid data types for Vehicle: speed and color must be numbers.");
    }

    Object.defineProperty(this, 'speed', {
        value: speed,
        writable: true,
        enumerable: true,
        configurable: false
    });

    Object.defineProperty(this, 'color', {
        value: color,
        writable: true,
        enumerable: true,
        configurable: false
    });
}

Vehicle.prototype.turnLeft = function() { console.log("Turning left..."); };
Vehicle.prototype.turnRight = function() { console.log("Turning right..."); };
Vehicle.prototype.start = function() { return true; };
Vehicle.prototype.stop = function() { return true; };
Vehicle.prototype.goBackward = function(speed, accel) { console.log(`Reversing at ${speed}`); };
Vehicle.prototype.goForward = function(speed, accel) { console.log(`Moving forward at ${speed}`); };

Vehicle.prototype.toString = function() { return `Vehicle - Color: ${this.color}`; };
Vehicle.prototype.valueOf = function() { return this.speed; };


function Bicycle(speed, color) {
    Vehicle.call(this, speed, color); 
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function() { console.log("Ring! Ring!"); };


function MotorVehicle(speed, color, sizeOfEngine, licencePlate) {
    Vehicle.call(this, speed, color);

    if (typeof sizeOfEngine !== 'number' || typeof licencePlate !== 'string') {
        throw new Error("Invalid data types for MotorVehicle.");
    }

    Object.defineProperty(this, 'sizeOfEngine', {
        value: sizeOfEngine,
        writable: true,
        enumerable: true,
        configurable: false
    });

    Object.defineProperty(this, 'licencePlate', {
        value: licencePlate,
        writable: true,
        enumerable: true,
        configurable: false
    });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.getSizeOfEngine = function() { return this.sizeOfEngine; };
MotorVehicle.prototype.getLicensePlate = function() { return this.licencePlate; };


function Car(speed, color, engine, plate, numOfDoors, numWheels, weight) {
    MotorVehicle.call(this, speed, color, engine, plate);

    if (typeof numOfDoors !== 'number' || typeof numWheels !== 'number' || typeof weight !== 'number') {
        throw new Error("Invalid data types for Car.");
    }

    Object.defineProperties(this, {
        'numOfDoors': { value: numOfDoors, writable: true, configurable: false },
        'numWheels': { value: numWheels, writable: true, configurable: false },
        'weight': { value: weight, writable: true, configurable: false }
    });
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.switchOnAirCon = function() { console.log("AC is on."); };
Car.prototype.getNumOfDoors = function() { console.log("the number of car doors is : ", this.numOfDoors) };

function DumpTruck(speed, color, engine, plate, loadCapacity, numWheels, weight) {
    MotorVehicle.call(this, speed, color, engine, plate);

    if (typeof loadCapacity !== 'number' || typeof numWheels !== 'number' || typeof weight !== 'number') {
        throw new Error("Invalid data types for DumpTruck.");
    }

    Object.defineProperties(this, {
        'loadCapacity': { value: loadCapacity, writable: true, configurable: false },
        'numWheels': { value: numWheels, writable: true, configurable: false },
        'weight': { value: weight, writable: true, configurable: false }
    });
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.lowerLoad = function() { console.log("Lowering load..."); };
DumpTruck.prototype.raiseLoad = function() { console.log("Raising load..."); };