//Use Recursion to Create a Countdown

// Only change code below this line
function countdown(n){
    if(n < 1) {
      return [];
    } else {
      let countArray = countdown(n - 1)
      countArray.unshift(n)
      return countArray
    }
  }
  console.log(countdown(5));
  
  // Only change code above this line