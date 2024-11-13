// Equality Comparison
// normal comparison
// strict comparison


// 1. Normal Comparision : it only compares the value not type
// console.log( 3 == 3, 3 == '3');
// console.log('Rishika' == 'Rishika');



// 2. Strict Comparison
// It compares values as well as data type
// console.log( 3 === 3, 3 === '3');
// console.log('Rishika' === 'Rishika');





// Null vs undefined
var x;
console.log(x);

var y = null;
console.log(y);

console.log(x == y); // will give true because in actual undefined is a value  that is unknown and null is also a value that is not existing
console.log(x === y);