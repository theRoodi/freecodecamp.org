//Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) < 0) {
      return false
    } else {
      return true
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));