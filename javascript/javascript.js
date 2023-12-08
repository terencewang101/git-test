function add7(n) {
    return n + 7;
}
console.log("The result of Q1 is " + add7(5) + ".")

function multiply(a, b) {
    return a * b;
}
console.log("The result of Q2 is " + multiply(7, 5) + ".")

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
console.log("The result of Q3 is " + capitalize("teNDOn") + ".")

function lastLetter(string) {
    return string.slice(-1);
}
console.log("The result of Q4 is " + lastLetter("we are retrievers") + ".")
