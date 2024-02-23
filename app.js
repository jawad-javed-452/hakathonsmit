var math = +prompt("Enter Your Maths Number");
var phy = +prompt("Enter Your Physics Number");
var English = +prompt("Enter Your English Number");
var urdu = +prompt("ENter Your Urdu Number");
var PST = +prompt("Enter Your Pakistan Studies");

var percentage = math + phy + English + urdu + PST ;

var total_perct = percentage / 500 * 100 ;

var total = total_perct;

if(total >= 80){
    console.log("Your Grade is A+");
}
else if(total >=70){
    console.log("Your Grade is A");
}
else if(total >=60){
    console.log("Your Grade is B");
}
else if(total >=50){
    console.log("Your Grade is C");
}

else{
    console.log("Your Are Failed");
}