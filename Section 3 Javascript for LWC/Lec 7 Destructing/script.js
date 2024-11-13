// array destructring

// let arr = ['amazon','google'];
// // let company1 = arr[0];
// //let company2 = arr[1];


// let [company1,company2] = arr;
// console.log(company1,company2); // amazon google
// let [company3] = arr;
// console.log(company3); // 





// Object destructuring
let options = {
    title : 'zero to hero',
    age : 23,
    type : 'CRM'
}
// var title = options.title;
// var age = options.age;
// console.log(title,age); // zero to hero 23


let {title, type ,age } = options;
console.log(title,age,type);  // zero to hero 23 CRM

let { title: t ,age: a} = options;
console.log(t,a); // zero to hero 23

