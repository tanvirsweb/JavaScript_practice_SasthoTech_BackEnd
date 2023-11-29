// Function 
function addNums1(num1= 2, num2= 5){
    return num1+num2;
}
console.log(addNums1());//by default addNums(2,5) passed
console.log(addNums1(100,200));

// or,
const addNums2 = (num1=2 , num2=5)=>{
   return num1+num2;
}
console.log(addNums2(100,50));
// or,
const addNums3 = (num1=2 , num2=5)=>num1+num2;

console.log(addNums3(100,150));

const addNums4 = num1=>num1+100;
console.log(addNums4(20));
