// var --> old
// use let/const
// const --> can't redeclare with same variable/array name
// variable value fixed
// array elements --> can be modified.

const func1 = ()=>{
    for(let i=0;i<5;i++){
        console.log('inside func1(): i=',i);
    }
}

const printToN = (n)=>{
    for(let i=0;i<n;i++){
        console.log('inside funcAsync(): i=',i);
    }
}
const funcAysnc = async ()=>{
    console.log('this is an asnchronous function');
    await printToN(10);// missuse of await
    // printToN() is already Blocking function , no need to use await , work as it generally works: blocks execution of other codes
    // to make funcAysnc() asynchronous 'async'... 'await' is used
    console.log('End of Asynchronous function');
}

console.log('statement', 1);
console.log('statement', 2);
func1();
console.log('statement', 3);
console.log('statement', 4);

console.log('statement', 5);
console.log('statement', 6);
funcAysnc();
// other instructions after funcAysnc() is fired won't wait for it.
// They will keep executing concurrently
console.log('statement', 7);
console.log('statement', 8);

// Normal JS function: Synchronous blocking
// to make function asynchronous: use both 'async' & 'await' in function, if one of them is not used it won't work as Asynchronous function.
// if function returns a Promise: it's Asynchronous

// normal callback() --> synchronous
// callback() passed inside -->setTimeOut(callback, timeUnit); or, inside promise --> Asynchronous


// statement 1
// statement 2
// inside func1(): i= 0
// inside func1(): i= 1
// inside func1(): i= 2
// inside func1(): i= 3
// inside func1(): i= 4
// statement 3
// statement 4
// statement 5
// statement 6
// this is an asnchronous function
// inside funcAsync(): i= 0
// inside funcAsync(): i= 1
// inside funcAsync(): i= 2
// inside funcAsync(): i= 3
// inside funcAsync(): i= 4
// inside funcAsync(): i= 5
// inside funcAsync(): i= 6
// inside funcAsync(): i= 7
// inside funcAsync(): i= 8
// inside funcAsync(): i= 9
// statement 7
// statement 8
// End of Asynchronous function