console.log("hellow world");
var myName = "pathum";
console.log(myName);
var age = 54;
console.log(age);
function typeGuard(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return +num1 + +num2; //convert to number
    }
    else {
        return num1 + num2;
    }
}
// console.log(typeGuard(45,45));
console.log(typeGuard("50", 50));
