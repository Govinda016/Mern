let adddata = () => {
    let email = prompt("enter the email");
    let password = prompt("enter the password");

    verify(email,password)
        .then((success) => {
        alert("success:",+ success)
        })
        .catch((error) => {
        alert("error:",+ fail)
    })
}

let verify = (email,password) => {
    return new Promise((res, rej)=>{
        if (email == "admin" && password == "admin236")
        {
            res()
        }
        else {
            rej()
        }
    })
}
