//Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
    this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;
let dog = new Dog('dog')
console.log(beagle.numLegs)
console.log(dog)