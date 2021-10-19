//Testing Objects for Properties

function checkObj(obj, checkProp) {
    // Only change code below this line
    let result = ''
    if(obj.hasOwnProperty(checkProp)) {
      result = obj[checkProp]
    } else {
      result = 'Not Found'
    }
    return result
    // Only change code above this line
  }