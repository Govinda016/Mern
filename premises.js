// let mypromise = new Promise((resolve, reject) => {
//     //sucess  =>success,
//     //failure=>error
// });


/* NOte:In promise there are 3 stages. they are:
a.pending: the timing that take in the promise
b.fullfill / reject: the promise either give the answer or it reject the logic.
c. settlement:after fullment/reject, the promise function is settled.
*/


//For example:

let login = () => {
    return new Promise((resolve, reject) => {
        resolve({user:"suhash"});
       // reject();
    });
}  
let user = "admin";
let pws = "admin123"; 
let is_loading = true;
login(user,pwd);
then((response)=> {
    // sucess
    // handling
    console.log("i am here.")
})
    .catch((error) => {
    //error
    })
    // .finally(()=> {
    // is_loading = false;
    // })
console.log("i am there.")