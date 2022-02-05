//Truncate a String

function truncateString(str, num) {
    let newStr = str;
    let arr= []
    for (let i = 0; i < num;i++){
      arr.push(newStr[i])
    }
    if (num < str.length) {
      arr.push('...');
    }
    newStr = arr.join('')
    return newStr;
  }
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));