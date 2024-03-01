// var math = +prompt("Enter Your Maths Number");
// var phy = +prompt("Enter Your Physics Number");
// var English = +prompt("Enter Your English Number");
// var urdu = +prompt("ENter Your Urdu Number");
// var PST = +prompt("Enter Your Pakistan Studies");

// var percentage = math + phy + English + urdu + PST ;

// var total_perct = percentage / 500 * 100 ;

// var total = total_perct;

// if(total >= 80  ){
//     document.write("Your Grade is A+");
// }

// else if(total >=70){
//     document.write("Your Grade is A");
// }

// else if(total >=60){
//     document.write("Your Grade is B");
// }

// else if(total >=50){
//     document.write("Your Grade is C");
// }

// else{
//     document.write("Your Are Failed");
// }

var arr = [
    "jawad",
    "rehman",
    "Aliyan",
    "kazi"
];

let arrvalue = arr[2];

for (let i =1; i < arr.length; i++) {
    if(arr[i] == arrvalue){
    document.write("<h1> We found - " + arrvalue + "</h1>");
}
};

// arr.splice(0,1);

// arr.forEach(Element => {
//     let multiple = arr * 2;
//     console.log(multiple);
// })
// document.write(spilce);
