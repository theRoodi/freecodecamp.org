//Use getters and setters to Control Access to an Object

// Only change code below this line
class Thermostat{
    constructor(temp){
      this.temp = temp
    }
    get temperature(){
      return (this.temp - 32) * 5/9
    }
  
    set temperature(updTemp){
      this.temp = updTemp * 9.0/5 + 32
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius