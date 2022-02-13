// Where do I Belong

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b)
    for(let i =0; i<= arr.length;i++){
      if(arr[i]>=num) {
        return i
      } else if(arr.length == 0) {
        return 0
      } else if (arr[i] < num ){
        arr.push(num)
      }
    }
    
  }
  
  console.log(getIndexToIns([40, 60], 50))
  console.log(getIndexToIns([2, 5, 10], 15))