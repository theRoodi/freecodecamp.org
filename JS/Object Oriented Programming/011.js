//Iterate Over All Properties

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for(let props in beagle) {
    if(beagle.hasOwnProperty(props)) {
      ownProps.push(props)
    } else {
      prototypeProps.push(props)
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);