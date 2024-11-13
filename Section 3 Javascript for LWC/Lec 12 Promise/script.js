// P-1
// function checkIsSuccess(data){
//     return new Promise ( (resolve,reject) => {
//         if(data == 'success'){
//             return resolve('Successfully Executed');
//         }else{
//             return reject('Unsuccessfull Executed');
//         }
//     })
// }

// // console.log(checkIsSuccess('success'));

// const pro = checkIsSuccess('succesrrs');
// pro.
//     then((message) =>{
//         console.log(message);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })







// P-2
fetch('https://api.github.com/users/karkranikhil')
    .then((data) =>{
        console.log(data);
        console.log(data.json())
    })
    .catch((error) =>{
        console.log(error);
    })