console.log('JS Loaded');
let element = document.querySelector('div');
console.log(element,element.innerText);
element.style.color = 'red';


let elementAll = document.querySelectorAll('div');
console.log(elementAll);  // remember this is a nodelist

// Array.from(elementAll).forEach(function(item){
//     item.style.color = 'yellow';
// })

elementAll.map(function(item){
    item.style.color = 'yellow';
})