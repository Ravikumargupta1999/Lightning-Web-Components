/** Let Keyword */
// It can be updated but cannot be re-declared


// // P-1
// let c = 'Ravi';
// console.log(c);
// c = 'Sachin';
// console.log(c);  





// P-2
// let c = 'Ravi';
// console.log(c);
// c = 'Aarifa';
// console.log(c);
// let c = 'Aritra';  // SyntaxError: Identifier 'c' has already been declared





// Let keyword Supports function level scope as well as block level scope
// It never support window scope
// P-3
// let c = 'Ravi';
// console.log(c,window.c);



// // P-4
// function abc(){
//     let x = 'Ravi';
//     console.log(x);
// }
// abc();
// console.log(x);  // Uncaught ReferenceError: x is not defined



// P-4  It doesn't support global scope
if(2==2){
    let x = 'Ravi';
    console.log(x);
}
console.log(x); // Uncaught ReferenceError: x is not defined