const enter = () => {
   let id= prompt("enter the email-id");
   let psw= prompt("enter the password")

    verify(id,psw)
    .then((success)=> {
        alert("id:" + success);
    })
        .catch((error) => {
        alert("psw:" + error)
    })
}

let verify = (id,pass) => {
    return new Promise((res,rej)=> {
        if (id === "admin" && pass === "admin123")
        {
            res("matched");
        }
        else
        {
            rej("rejected")
            }
    })
}