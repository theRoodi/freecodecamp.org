//Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
    let weight = 15;
    this.getWeight = () => {
      return weight
    }
  
  }
  
  let brd = new Bird()
  console.log(brd.getWeight())