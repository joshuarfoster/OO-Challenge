class Vehicle {
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    };
    honk(){
        return "Beep."
    };
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    };
};
class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels=4;
    };
};
class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels=2
    };
    revEngine(){
        return 'VROOM!!!!'
    };
};
class Garage{
    constructor(capacity){
        if(!Number.isFinite(capacity)||capacity<=0){
            throw new Error('Invalid capacity')
        };
        this.capacity=capacity;
        this.vehicles=[];
    }
    add(veh){
        if(!(veh instanceof Vehicle)){
            return 'Only vehicles are allowed in here!'
        }
        if (this.capacity-this.vehicles.length===0){
            return "Sorry we're full."
        }
        this.vehicles.push(veh);
        return 'Vehicle added!'
    }
}