
let customer = [];
function addcustomer() {
    //scope of the function
    //return; (if i return result out of this function)
    let name = prompt("enter your name:");
    let address = prompt("enter your address:");
     let phone = prompt("enter your phone:");
    let email = prompt("enter your email:"); 
  let remark = prompt("enter your remark:");

  let single_user = {
    name: name,
    address: address,
    phone: phone,
    email: email,
    remark:remark
  }
  customer.push(single_user);
  showdata();
}

const showdata = () => {
  let html_data = "";
  customer.map((std, index)=> {
   html_data += "<tr>";
html_data += "<td>"+(index+1)+"</td>";
html_data += "<td>" +std.name + "</td>";
html_data += "<td>"+std.address+ "</td>";
html_data += "<td>"+std.phone+ "</td>";
html_data += "<td>"+std.email+ "</td>";
html_data += "<td>" + std.remark + "</td>";
    html_data += "</tr >";
  })
  document.getElementById('cus_id').innerHTML=html_data

}


 

// let customer = [
//   {
//     name: "ram",
//     address: "kathmandu",
//     phone: 9800000001,
//     email: "ram@gmail.com",
//     remark:"fraud"
//   },
//    {
//     name: "hari",
//     address: "kathmandu",
//     phone: 9800000012,
//     email: "hari@gmail.com",
//     remark:"good"
//   },
//     {
//     name: "sita",
//     address: "pokhara",
//     phone: 9800000101,
//     email: "ram@gmail.com",
//     remark:"best"
//   },

//      {
//     name: "gita",
//     address: "rolpa",
//     phone: 9800100001,
//     email: "ram@gmail.com",
//     remark:"best"
//   },
// ]
// customer.map(function (value, index) {
//   console.log(value);
// })

// let html_data = "";
// let i = 0;
// let size = customer.length;
// while (i<size) {
//   html_data += "<tr>";
// html_data += "<td>"+(i+1)+"</td>";
// html_data += "<td>" + customer[i].name + "</td>";
// html_data += "<td>"+customer[i].address+ "</td>";
// html_data += "<td>"+customer[i].phone+ "</td>";
// html_data += "<td>"+customer[i].email+ "</td>";
// html_data += "<td>" + customer[i].remark + "</td>";
//     html_data += "</td >";
//     i++; 
// }
// document.getElementById('cus_id').innerHTML=html_data

// let html_data = "";
// for (let i = 0; i < size; i++)
// {
//    html_data += "<tr>";
//  html_data += "<td>"+(i+1)+"</td>";
//  html_data += "<td>" + customer[i].name + "</td>";
//  html_data += "<td>"+customer[i].address+ "</td>";
//  html_data += "<td>"+customer[i].phone+ "</td>";
//  html_data += "<td>"+customer[i].email+ "</td>";
//  html_data += "<td>" + customer[i].remark + "</td>";
//      html_data += "</td>";
//   }
// document.getElementById('cus_id').innerHTML = html_data;




 