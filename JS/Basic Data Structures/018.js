//Iterate Through the Keys of an Object with a for...in Statement

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let value = 0
    for (let status in usersObj) {
      if(usersObj[status].online === true) {
        value++
      }  
    }
    return value
    // Only change code above this line
  }
  
  console.log(countOnline(users));