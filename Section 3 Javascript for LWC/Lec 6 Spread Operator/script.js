// Spread Operator
// 1. Array

// var arr = ['a','b','c'];
// console.log(arr);

// // array index starts from zero
// console.log(arr[0]);
// console.log(arr[1]);


// // push method
// arr.push('2');
// console.log(arr);






// 2. Object
// var obj = {
//     'name' : 'Salesforce',
//     'age' : 12,
//     'full name' : 'zero to hero'
// }
// console.log(obj,obj.age,obj.name,obj.hobbies);
// console.log(obj,obj['name'],obj['age']);
// console.log(obj.hobbies);
// console.log(obj);
// obj.hobbies = 'Cricket';
// console.log(obj);



// 1. Expanding a String
// let greeting = "Hello Everyone";
// let charList = [...greeting];
// console.log(charList);


// 2. Combining array
// let arr1 = ['amazon','google'];
// let arr2 = ['facebook','apple'];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);



// 3. Adding values to an array
// let arr4 = ['a','b','c'];
// let arr5 = [...arr4,'nikhil'];
// // let arr5 = ['nikhil',...arr4];   // [ 'nikhil', 'a', 'b', 'c' ]
// console.log(arr5);




// 4. Combining Objects
// let obj1 = {name : 'salesforce','age' : 23,date : '23/10/1999'};
// let obj2 = {name : 'facebook',age : 55};
// let obj3 = {...obj1,...obj2};
// console.log(obj3);



// 5. Shallow copy : Shallow copy only works at one level
// var arr10 = ['x','y','z'];
// arr10.push(20);
// console.log(arr10);  //[ 'x', 'y', 'z', 20 ]
// var arr11 = arr10;
// arr11[0] = 1;
// console.log(arr10,arr11);  // [ 1, 'y', 'z', 20 ] [ 1, 'y', 'z', 20 ]



// console.log(arr10); // [ 1, 'y', 'z', 20 ]
// var arr12 = [...arr10];
// arr12[0] = 20;
// console.log(arr10,arr12);  // [ 1, 'y', 'z', 20 ] [ 20, 'y', 'z', 20 ]




// 6.Nested Copy
var arrObj = [
    {name : 'Nikhil'},
    {name : 'Ravi'}
];
var arrObj1 = [...arrObj];
console.log(arrObj1);  // [ { name: 'Nikhil' }, { name: 'Ravi' } ]
arrObj1[0].name = 'Lshikshi';
console.log(arrObj,arrObj1);  // [ { name: 'Lshikshi' }, { name: 'Ravi' } ] [ { name: 'Lshikshi' }, { name: 'Ravi' } ]




// var arrObj = [
//     23,
//   23
// ];
// var arrObj1 = [...arrObj];
// console.log(arrObj1);  // [ 23, 23 ]
// arrObj1[0].name = 'Lshikshi';
// console.log(arrObj,arrObj1); // [ 23, 23 ] [ 23, 23 ]




// var arrObj = [
//     23,
//   23
// ];
// var arrObj1 = [...arrObj];
// console.log(arrObj1);  // [ 23, 23 ]
// arrObj1[0] = 'Lshikshi';
// console.log(arrObj,arrObj1);  // [ 23, 23 ] [ 'Lshikshi', 23 ]




// Hack for nested copy
// var arrObj = [
//     {name : 'Nikhil'},
//     {name : 'Ravi'}
// ];
// console.log(arrObj); // [ { name: 'Nikhil' }, { name: 'Ravi' } ]
// var arrObj1 = JSON.stringify(arrObj);
// console.log(arrObj1); // [{"name":"Nikhil"},{"name":"Ravi"}]
// arrObj1[0].name = 'Aarifa';
// console.log(arrObj,arrObj1); // [ { name: 'Nikhil' }, { name: 'Ravi' } ] [{"name":"Nikhil"},{"name":"Ravi"}]




var arrObj = [
    {name : 'Nikhil'},
    {name : 'Ravi'}
];
var arrObj1 = JSON.stringify(arrObj);
arrObj1 = JSON.parse(arrObj1);
console.log(arrObj1); // [ { name: 'Nikhil' }, { name: 'Ravi' } ]
arrObj1[0].name = 'Rishika';
console.log(arrObj,arrObj1); // [ { name: 'Nikhil' }, { name: 'Ravi' } ] [ { name: 'Aarifa' }, { name: 'Ravi' } ]

