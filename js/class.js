//function (this)in object
//     let user={
//     name:"Anya",
//     name1:"Anna",
//     age:18,
//     greeting: function () {
//         console.log("hello",this.name);
//     },
//     greting: function () {
//         console.log("helo", user.name1);
//     },
    // run: (speed=0)=>{
    //     console.log("is",${speed});
    // }
// };
// user.greeting();
// user.greting();
// user.run();
//function construction, arrow function
// function User(name,age) {
//     this.age=age;
//     this.name=name;
//     this.greet=function(){
//         console.log("Hello",${this.name});
//     }
// }
// let newU=new User("Taras",24);
// let newU2=new User("Nazar",22);
// console.log(newU);
// console.log(newU2);
// class Book{
// constructor(name,autor,page,user){
//     this.name=name;
//     this.autor=autor;
//     this.page=page;
//     this.users=user;
// }
//     booking(){
//     if(this.users>0){
//         console.log("Exchange your book");
//     }else {
//         console.log("Buy this book");
//     }
//     }
// }
// let myBook=new Book("Kobzar","Shevchenko",500,5);
// myBook.booking();
//  class School{
//      constructor(subjects,pupil){
//          this.subject=subjects;
//          this.pupil=pupil;
//      }
//  }
//  class Exersize extends School{
//      constructor(subject,pupil,exersize){
//          super(subject,pupil);
//          this.exersize=exersize;
//      }
//      countPupil(){
//          if(this.pupil<10){
//              console.log("Notice");
//          } else{
//              console.log("perfect");
//          }
//              }
//  }
// let fizika=new School(10,20);
// let history=new Exersize(10,34,2);
// history.countPupil();
// function Tag(titleOfTag,action,attrs){
//     this.titleOfTag=titleOfTag || 'No text';
//     this.action=action  || 'No action';
//     this.attrs=attrs    || [];
// }
// let titleOfTag='<a>';
// let action='Tag <a>, important element in language HTML';
// let attrs=[
//     {titleOfAttr: 'coords',
//     actionOfAttr: 'download',
//     },
// ];
// let obj={titleOfTag,action,attrs};
// let tag=new Tag(obj);
// console.log(tag);
// let car={
//     model:'S',
//     manufacturer:'Tesla',
//     years:2001,
//     maxSpeed:250,
//     volume:6,
//     driver2:{
//         name:'Kolya',
//         age:24,
//         stazh:4,
//     },
//     drive:function () {
//        console.log("Їдемо зі швидкістю",this.maxSpeed,"на годину")
//     },
//     info:function () {
//         let jsonCar=JSON.stringify(car);
//         console.log(jsonCar);
//     },
//     increaseMaxSpeed:function (newSpeed) {
//         this.maxSpeed=newSpeed;
//         console.log(newSpeed);
//     },
//     changeYear:function (newValue) {
//         this.years=newValue;
//         console.log(newValue);
//     },
//     addDriver:function (driver) {
//         this.driver2=driver;
//         console.log(driver);
//     }
// };
// let driverMan={
//     name:'Ka',
//         age:20,
//         stazh:4,
// };
// car.increaseMaxSpeed(2000);
// car.changeYear(34);
// car.info();
// car.addDriver(driverMan);
// function Car(model,manufacturer,years,maxSpeed,volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.years = years;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
// }
//     function drive() {
//         console.log("Їдемо зі швидкістю", this.maxSpeed, "на годину")
//     }
//
//     function info() {
//         console.log(carfunc);
//     }
//
//     function increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(newSpeed);
//     }
//
//     function changeYear(newValue) {
//         this.years = newValue;
//         console.log(newValue);
//     }
//
//     function addDriver(driver) {
//         this.driver2 = driver;
//         console.log(driver);
//     }
//
// let driverMan={
//     name:'Ka',
//     age:20,
//     stazh:4,
// };
// let carfunc=new Car('S','Tesla',2001,230,6);
// increaseMaxSpeed(2000);
// changeYear(34);
// info();
// addDriver(driverMan);
// class Car {
//     constructor(model, manufacturer, years, maxSpeed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.years = years;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log("Їдемо зі швидкістю", this.maxSpeed, "на годину")
//     }
//
//     info() {
//         console.log(carfunc);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(newSpeed);
//     }
//
//     changeYear(newValue) {
//         this.years = newValue;
//         console.log(newValue);
//     }
//
//     addDriver(driver) {
//         this.driver2 = driver;
//         console.log(driver);
//     }
// }
// let driverMan={
//     name:'Ka',
//     age:20,
//     stazh:4,
// };
// let carfunc=new Car('S','Tesla',2001,230,6);
// console.log(carfunc);
// carfunc.increaseMaxSpeed(2000);
// carfunc.changeYear(34);
// carfunc.info();
// carfunc.drive();
// carfunc.addDriver(driverMan);
// class Zolushka{
//     constructor(name,age,foot){
//         this.name=name;
//         this.age=age;
//         this.foot=foot;
//     }
//
// }
// let zolushka1=new Zolushka("Fiona",18,36);
// let zolushka2=new Zolushka("Moana",19,37);
// let zolushka3=new Zolushka("Ziana",20,38.5);
// let zolushka4=new Zolushka("Coall",21,37);
// let zolushka5=new Zolushka("Annet",22,39);
// let zolushka6=new Zolushka("Ksenia",18,40);
// let zolushka7=new Zolushka("Tanya",19,35);
// let zolushka8=new Zolushka("Ruslana",22,34);
// let zolushka9=new Zolushka("Roksolana",28,36);
// let zolushka10=new Zolushka("Tina",23,37);
// let arrayZolushka=[zolushka1,zolushka2,zolushka3,zolushka4,zolushka5,zolushka6,zolushka7,zolushka8,zolushka9,zolushka10];
// class Prince{
//     constructor(name,age,sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.foot = sizeFoot;
//     }
//         foundZolushka(array){
//         let find=null;
//             for (const Element of array) {
//                 if(this.foot===Element.foot){
//
//                    find=Element;
//                     console.log('My Zolushka name '+find.name)
//                 }
//
//             }
//         }
// }
// let princedata=new Prince('Carl',22,40);
// princedata.foundZolushka(arrayZolushka);
// class Zolushka{
//     constructor(name,age,foot){
//         this.name=name;
//         this.age=age;
//         this.foot=foot;
//     }
//
// }
// let zolushka1=new Zolushka("Fiona",18,36);
// let zolushka2=new Zolushka("Moana",19,37);
// let zolushka3=new Zolushka("Ziana",20,38.5);
// let zolushka4=new Zolushka("Coall",21,37);
// let zolushka5=new Zolushka("Annet",22,39);
// let zolushka6=new Zolushka("Ksenia",18,40);
// let zolushka7=new Zolushka("Tanya",19,35);
// let zolushka8=new Zolushka("Ruslana",22,34);
// let zolushka9=new Zolushka("Roksolana",28,36);
// let zolushka10=new Zolushka("Tina",23,37);
// let arrayZolushka=[zolushka1,zolushka2,zolushka3,zolushka4,zolushka5,zolushka6,zolushka7,zolushka8,zolushka9,zolushka10];
// class Prince{
//     constructor(name,age,sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.foot = sizeFoot;
//     }
//     foundZolushka(array){
//         const find=array.find(Zolushka=>this.foot===Zolushka.foot);
//         find
//         ?console.log('My Zolushka name '+find.name)
//         :console.log('i did not find my Zolushka');
//
//     }
//
//
// }
// let princedata=new Prince('Carl',22,40);
// princedata.foundZolushka(arrayZolushka);
