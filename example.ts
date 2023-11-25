console.log("hellow world");

let myName:string="pathum";
console.log(myName);

const age:number=54;
console.log(age);


function typeGuard(num1:string|number,num2:string|number):number{
  if(typeof num1==="string"||typeof num2==="string"){
    return +num1 + +num2;//parse to integer
  }else{
    return num1+num2;
  }
}

// console.log(typeGuard(45,45));

console.log(typeGuard("50",50));


