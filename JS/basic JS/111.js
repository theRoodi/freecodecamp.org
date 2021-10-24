//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum) {
      return [startNum]
    } else {
      let countArray = rangeOfNumbers(startNum,endNum - 1)
        countArray.push(endNum)
        return countArray
    }
  };
  
  console.log(rangeOfNumbers(6,9))