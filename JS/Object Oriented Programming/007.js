//Extend Constructors to Receive Arguments

function Dog(name, color) {
    this.name = name,
    this.color = color,
    this.numLegs = 4
  }
  
  let terrier = new Dog("Dog", 'BLVCK')
  
  console.log(terrier)