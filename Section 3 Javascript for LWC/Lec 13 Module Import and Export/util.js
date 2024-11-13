// export const PI = 3.14;
// export  function add(a,b){
//     console.log(a+b);
// }


const PI = 3.14;
function add(a,b){
    console.log(a+b);
}

// export together
// export {PI,add};



// export with alias
export {PI as PI_DATA,add};


// export with dafault
export default function minus(a,b){
    console.log(a-b);
}
