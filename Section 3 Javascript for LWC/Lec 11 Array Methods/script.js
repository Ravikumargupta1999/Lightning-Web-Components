let arr = [2,3,5,7,9,11];

// map()
// syntax
// arr.methodName(function(currentItem,index,actualArray){

// })

// let newArray = arr.map((currentItem,index,array)=>{
//     console.log(`CurrentItem os ${currentItem} indexx ${index}, array ${array}`);
//     return currentItem*2;
// });
// console.log(newArray);



// filter()
// let newArray = arr.filter((currentItem,index,array)=>{
//     console.log(`CurrentItem os ${currentItem} indexx ${index}, array ${array}`);
//     return currentItem>5;
// });
// console.log(newArray);


// // every()
// let age = [32,33,18,,40];
// let isAllAdult = age.every(function(currentItem){
//     return currentItem > 10;
// });
// console.log(isAllAdult);









// // every()
// let age = [32,33,18,,40];
// let isAllAdult = age.every(function(currentItem){
//     return currentItem > 50;
// });
// console.log(isAllAdult);



// // sort()
// var names = ['Nikhil','John','Smith'];
// console.log(names.sort());
// console.log(names);



// // sorting of number
// var points = [10,39,12,80,54];
// var sorted = points.sort();
// console.log(sorted);
// var sorted = points.sort((a,b) =>{
//     return b - a;
// });
// console.log(sorted);





// reduce methods
// arr.reduce(function(total,currentValue,index,array){

// },initialValue);

// let sum = arr.reduce((total,currentItem) =>{
//     return total + currentItem;
// },0);
// console.log(sum);




// forEach()
arr.forEach(function(currentItem){
    console.log(currentItem);
    return currentItem*2;
});
console.log(arr);