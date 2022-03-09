//Refactor Global Variables Out of Functions

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
  let newArr = list.slice()

  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
  let newArr = list.slice()
  const bookIndex = newArr.indexOf(bookName);
  if (bookIndex >= 0) {

    newArr.splice(bookIndex, 1);
    return newArr;

    // Change code above this line
    }
}
console.log(add(bookList, "A Brief History of Time"))
console.log(remove(bookList, "A Brief History of Time"))