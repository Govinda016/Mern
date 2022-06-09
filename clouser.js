const functionName = () => {
    //function within the function is clouser.
    //eg
    const func1 = () => {
        //code
    }

    func1(); //function call
}

functionName();


const functionNames = () => {
   console.log("i am inside function names")
    const func1 = () => {
        console.log("i am inside function1")
    }

   return func1; //function scope
}

let result = functionNames();

result()


//function(general function,arrow function)
//arrow natation
//callback:function which have parameter called.
//clouser( function within the function.)
//asyne - await
//promise (note:it is the part of asyne-await. it is done in replace of asyne-await.)
