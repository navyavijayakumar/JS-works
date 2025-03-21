
//arrays=>to organize group of objects

var colors=["green","black","blue","red"]

// console.log(colors[1])
// console.log(colors[4])

colors.push("white") //to insert an element in the end of the array
console.log(colors);

colors.pop() //to remove an element in the end of the array
console.log(colors);

colors.unshift("white") //insert an element in the beginning of the array
console.log(colors);

colors.shift() //to remove an element in the beginning of the array
console.log(colors);

console.log(colors.includes("red")); //return true if object exist else return false


console.log(colors.indexOf("red")); // returns the index of first occurance  of the obj


var blueIndex=colors.indexOf("blue")
colors[blueIndex]="orange"
console.log(colors);
