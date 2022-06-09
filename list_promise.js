/*let promise1 =  Promise.resolve("resolve1") // the data in side "" is always goes into then().
let promise2 =  Promise.resolve("resolve2")
let promise3 =  Promise.resolve("resolve3");

Promise.all([promise1, promise2, promise3])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
})
  //all(): this function take various promises in the form of array.
  */


/*
let promise1 =  Promise.resolve("resolve1") // the data in side "" is always goes into then().
let promise2 =  Promise.reject("reject2")
let promise3 =  Promise.resolve("resolve3");

Promise.all([promise1, promise2, promise3])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
})
*/



let promise1 =  Promise.resolve("resolve1") // the data in side "" is always goes into then().
let promise2 =  Promise.reject("reject2")
let promise3 =  Promise.resolve("resolve3");

Promise.allSettled([promise1, promise2, promise3]) // here .allSettled element is used to get all resolved+rejected datas.
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
})