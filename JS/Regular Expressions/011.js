//Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /[^aeuio0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
