//Find the Longest Word in a String

function findLongestWordLength(str) {
    let arr = []
    arr = str.split(' ')
    let count = 0;
    for (let i = 0; i < arr.length; i++){
      if(arr[i].length>count) {
        count = arr[i].length
      }
    }
    return count
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));