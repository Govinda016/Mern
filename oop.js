//ECMA SCRIPTS
//ES5,ES6
//CLASS BASED OOP in JS
//prototype based OOP


//benefit of OOP
//a. encapsulation (note:data is rapped into component name class.)
//b. abstracton (note:extracting the data in the form of object.)
//c. reusability (note:one data can be used multiple times.)
//d. modulatity ( note:seperation of concern. an entity that can be made in a class which can be work indipendently.)
//e. overriding
//f. overloading
//g. inheritance


function User() {
    this.name = '';
    this.email = '';
    this.address = '';
}

User.prototype.getName = function () {
    return this.name;
}

User.prototype.getsName = function () {
    return this.email;
}


let user_obj = new User();    //functon can be used as object.
user_obj.name = "suhash";
console.log(user_obj.getName());

let user_1 = new User();
user_1.name = "serry";
console.log(user_1.getName())

user_obj.email = "test@gmail.com";
console.log(user_obj.getsName())