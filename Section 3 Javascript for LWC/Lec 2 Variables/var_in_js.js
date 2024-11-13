// console.log('Variable In JS');
/***************  Var Keyword*/

// It can be updated and re-decleared
// P-1
// var course = "Zero to Hero";
// console.log(course);
// var course = 12;
// console.log(course,window.course)
// Support two of scope : global level of scope and function levele Scope . It never support block level Scope



// P-2
// console.log(window);
// console.log(window.course);

// i.e. every variable declared in JS is assigned to window object

// P-3  : to demonostrate var variable support function scope
// function abc(){
//     var a = 'Hey, Aarifa';
//     console.log(a);
// }
// abc();
// console.log(a);  // ReferenceError: a is not defined



// P-4
// Block Scope : 
if(2 === 2){
    var x = 10;
}
console.log(x);  // 10 Since it's printing value of x = 10 which means it doesn't support block level scope 
console.log(window.x);





