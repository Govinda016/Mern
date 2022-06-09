class Student  {
    name;
    address;
    email;
    phone;

    getName = () => {
        return;
    }
    
}
 
let std = new Student();

std.name = "govinda";
std.address = "kathmandu";
std.email = "g@gmail.com";
std.phone = 9801300962;
console.log(std)
    
let std2 = new Student();
    std2.name = "karan";
std2.address = "butwal";
std2.email = "g@gmail.com";
std2.phone = 9815451537;
console.log(std2)


class Employe extends Student{
    id;
}

let Emp = new Employe();
Emp.name = "sajan kafle";
Emp.address = "sano thimi,bhaktapur";
Emp.email = "sajankafle@gmail.com";
Emp.phone = 9851253695;
Emp.id = 1;
console.log(Emp);