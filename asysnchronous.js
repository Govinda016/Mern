let func1 = () => {
    console.log("its 1st function");
}
let func2 = () => {
    console.log("its 2nd function");
}
func1();
setTimeout((func2),3000)
//func2();