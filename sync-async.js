// let func1 = () => {
//     console.log("i am function 1");

// }
// let func2 = () => {
//     console.log("i am function 2")
// }

// let func3 = () => {
//     console.log("i am function 3")
// }

// func1();
// func2();
// func3();




let func1 = () => {
    console.log("i am function 1");
}

let func2 = async() => {
    let result = await func3()
    return"i am in function 2"
}

// let func3 = () => {
//     console.log("i am in function 3")
// }

let func3 = async() => {
    console.log("i am in function 3");
}
console.log(func2());
func1();
func3();