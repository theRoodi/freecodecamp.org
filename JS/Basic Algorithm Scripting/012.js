//Slice and Splice

//Slice and Splice

function frankenSplice(arr1, arr2, n) {
    let arr = arr1.slice(0, arr1.length)
    let newArr = arr2.slice(0)
    for(let i = 0; i < arr.length;i++) {
      newArr.splice(n+i,0,arr[i])
    }
    
  
    return newArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))