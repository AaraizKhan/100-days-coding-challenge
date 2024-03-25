//using let variable 
// let personage = 25
// console.log(`The age of a person is ${personage}`)
// personage = 45    // value of variable assigned is changed here to 45, but we will still get the correct result
// console.log(`The age of a person is ${personage}`)
//usiing const variable 
var age = 25;
console.log("The age of a person is ".concat(age));
age = 45; // value of variable is changed, but it gives an error!!
console.log("The age of a person is ".concat(age));
