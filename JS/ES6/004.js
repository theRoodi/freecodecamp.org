//Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  let num = s.pop();
  return s.unshift(num)
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();