
let obj = {
    name : 'Salesforce',
    age : 23,
    DOB : '12/12/1999'
};

// Object.keys() // TypeError: Cannot convert undefined or null to object
console.log(Object.keys(obj)); // [ 'name', 'age', 'DOB' ]



// // Object.values()     // TypeError: Cannot convert undefined or null to object
// console.log(Object.values(obj));  // [ 'Salesforce', 23, '12/12/1999' ]


// // JSON.stringify()
// console.log(JSON.stringify(obj), typeof JSON.stringify(obj));    {"name":"Salesforce","age":23,"DOB":"12/12/1999"} string



// let arr = JSON.parse("['a','b','c']");  SyntaxError: Unexpected token ' in JSON at position 1
let arr = JSON.parse("{name : 'a', age : 23, div : 'c'}");  // SyntaxError: Unexpected token n in JSON at position 1
console.log(arr);