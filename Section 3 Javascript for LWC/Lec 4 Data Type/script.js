console.log('JS Loaded');

var x = 10.66; // +-(253-1)
console.log(typeof x);

// big int
var y = 1068768786n;
console.log(typeof y);


//String
var name = 'Ravi';
console.log(name,typeof name);


// boolean 
var isMonday = true;
console.log(isMonday,typeof isMonday);


// undefined
var z ;
console.log(z,typeof z)


// objects
var obj = {};
console.log(obj,typeof obj);

// indirectly array is also a type of ob
var arr = [];
console.log(arr,typeof arr);



// symbol
var sym = Symbol('id');
console.log(sym,typeof sym);



// null
 var x1 = 10;
 x1 = null;
 console.log(x1,typeof x1);


 // String()  Boolean()
 console.log(typeof String());
 console.log(typeof new String('Rishika'));
