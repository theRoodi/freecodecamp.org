//Stand in Line

function nextInLine(arr, item) {
    // Only change code below this line
    if(arr.length < 1) {
      arr.push(1);
    }
    let removedItem = arr.shift();
    arr.push(item);
    return removedItem;
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));