let myName:string="Hellow me";
console.log(myName);

//variables
const city:string="panadura";

const myAge:number=21;

const isPretty:boolean=false;

//Regular function parameter check
function myFunction(name:string,id:number){
  console.log("name :"+name+"and id is :"+id);
}
myFunction("joy",123);

//return type check function
function check():number{
 return 123; 
}

//function with object parameter
function myObj(obj:{a:number; b:string}){
  console.log("a value is :"+obj.a+"b value is :"+obj.b);
}

myObj({a:5,b:"number 5"});


function printName(names:{name:string,address?:string}){
  console.log("name is :"+names.name);
  console.log("name is :"+names.address);
}

printName({name:"kamal"});

printName({name:"Smith",address:"panadura"});

// //just ignore 
// export {};
