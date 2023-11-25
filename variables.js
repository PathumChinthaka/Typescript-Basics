var myName = "Hellow me";
console.log(myName);
//variables
var city = "panadura";
var myAge = 21;
var isPretty = false;
//Regular function parameter check
function myFunction(name, id) {
    console.log("name :" + name + "and id is :" + id);
}
myFunction("joy", 123);
//return type check function
function check() {
    return 123;
}
//function with object parameter
function myObj(obj) {
    console.log("a value is :" + obj.a + "b value is :" + obj.b);
}
myObj({ a: 5, b: "number 5" });
function printName(names) {
    console.log("name is :" + names.name);
    console.log("name is :" + names.address);
}
printName({ name: "kamal" });
printName({ name: "Smith", address: "panadura" });
// //just ignore 
// export {};
