let func1 = () => {
    return new Promise((res, rej) => {
        let x = true;
        if (x) {
            res("i am resolved of 1")
        }
        else {
            rej("i am reject of 1")
        }
    })
}
let func2 = () => {
    return new Promise((res, rej) => {
        let y = true;
        if (y) {
            res("i am resolved of 2")
        }
        else {
            rej("i am reject of 2")
        }
    })
}
let func3 = () => {
    return new Promise((res, rej) => {
        let z = false;
        if (z) {
            res("i am resolved of 3")
        }
        else {
            rej("i am reject of 3")
        }
    })
}

func1()
    .then((res1) => {
        console.log("res1:", res1);
        return func2()
    })
    .then((res2) => {
        console.log("res2:", res2)
        return func3()
    })
    .then((res3) => {
        console.log("res3:", res3)

    })


    .catch((rej) => {
        console.log("rej:", rej);
    });





// func1()
//     .then((res1) => {
//         console.log("res1:", res1);
//         func2()
//             .then((res2) => {
//                 console.log("res2:", res2);
//                 func3()
//                 .then((res3) => {
//                     console.log("res3:", res3);
//                 })
//                     .catch((err3) => {
//                     console.log("err3:",err3)
//                 })
//             })
//             .catch((err2) => {
//                 console.log("err2:", err2);
//         })
//     })

//     .catch((err1) => {
//         console.log("err1:", err1);
//     })