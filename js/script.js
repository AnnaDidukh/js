let name="Anya";
let age=18;
let bole=true;
document.write("run");
console.log(name);
alert("close?");
prompt("Region");
let userName=prompt("Name");
console.log(userName);
let userAge=confirm("Are you 21?");
console.log(userAge);
if(age>10){
    console.log("success");
} else {
    console.log("mistake");
}
let number1 =prompt("number1");
let number2 =prompt("number2");
if(number1-number2<3){
    console.log("yes");
} else {
    console.log("no");
}
if("18" === 18){
    console.log("yes");
} else {
    console.log("no")
}
let userAgeExit=prompt("Age");
if(userAgeExit>18){
    console.log("success");
}else {
    console.log("sorry goodbye");
}
switch (bole) {
    case true:
        console.log("ok");
        break;
    default:
        console.log("bad");
}
