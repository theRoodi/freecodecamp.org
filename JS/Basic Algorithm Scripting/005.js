//Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let array = []
    for (let x = 0; x < arr.length;x++){
      let num = arr[x][0]
      for(let i = 0; i < arr[x].length;i++){
        if(arr[x][i] > num) {
          num = arr[x][i]
        }
      }
      array.push(num);
    }
    return array;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
  console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [100, 1001, 857, 100000]]))
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))