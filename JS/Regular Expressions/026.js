//Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/g; // Change this line
let result = haRegex.test(haStr);