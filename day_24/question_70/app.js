// function printNumbersWithLet() {
//     for (let i= 1; i<=5; i++){
//         console.log(i)
// }
// printNumbersWithLet(); // this shows that 'let' limits 'i' to the loop, preventing errors from using 'i' where its not intended.
function printNumbersWithLet() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersWithLet();
