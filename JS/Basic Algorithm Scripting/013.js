//Falsy Bouncer

function bouncer(arr) {
    let arr2 = [false, null, 0, NaN, undefined, ""]
    let arr3 = []
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0;  j < arr2.length; j++) {
          if(!arr[i] === arr2[j]){
            arr3.push(arr[i])
            
            
          }
        }
        
    }
    return arr3;
  }
  console.log(bouncer([7, "ate", "", false, 9]))
  console.log(bouncer([false, null, 0, NaN, undefined, ""]))
  console.log(bouncer([null, NaN, 1, 2, undefined]))