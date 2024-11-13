/*****  const in JS */

// It can't be updated and also cannot be re-declared


// // P-1
// const c = 'Zero to here';
// console.log(c);
// c = 'lwc';
// console.log(c);



// // P-2
// const c = 'Zero to here';
// console.log(c);
// const c = 'lwc';
// console.log(c);



// const keyowrd supports function and block level scope
// P-3
// function abc(){
//     const x = 10;
//     console.log(x);
// }
// abc();
// console.log(x);


// // P-4
// if(2 == 2){
//     const x = 10;
//     console.log(x);
// }
// console.log(x);



// P-5
if(2 == 2){
    const x = 10;
    console.log(x);
}
const x = 30;
console.log(x);