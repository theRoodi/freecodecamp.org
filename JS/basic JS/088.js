//Using Objects for Lookups

// Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    let lookup = {
      'alpha':'Adams',
      'bravo':'Boston',
      'charlie':'Chicago',
      'delta':'Denver',
      'echo':'Easy',
      'foxtrot':'Frank'
    }
  
    // Only change code above this line
    result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");