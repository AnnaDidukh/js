// let dog={
//     name:"GAR",
//     age:2,
//     home:"la",
//     skills:3,
//     weight:44
// };
// let jsonDog=JSON.stringify(dog);
// let jsonDogParse=JSON.parse(dog);
// jsonDogParse.name="Dave";
// console.log(jsonDogParse);
// console.log(jsonDog);
// let gtByIdd=document.getElementById("divka");
// console.log(gtByIdd);
// //--------------------------
// let house={
//     price:6,
//     floor:7,
//     rooms:{count:5,color:"white"},
//     windows:["circle","kub"],
// };
// for (const houseElement in house) {
//     console.log(houseElement);
// }
// Object.keys(house);
// -  создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// -  создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let man1 = { name: 'kokohhs', skills : ['java','js'] , wife: { name: 'cherry' } };
let man2 = { name: 'kokssos', skills : ['java','js'] , wife: { name: 'cherry' } };
let join=Object.assign(man,man1,man2);
for (let keyObj in join) {
    console.log(keyObj);
}
let keyObj2=Object.keys(join);
console.log(keyObj2);
// -  При помощи for in вывести все ключи всех объектов из задания 1 и 2
// -  При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//+
// -  Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars=[
    {model:12,year:2000,power:34,color:"red"},
    {model:52,year:2010,power:74,color:"blue"},
    {model:152,year:2002,power:44,color:"brown"},
    {model:142,year:2000,power:54,color:"red"},
    ];
// -  Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities=[
    {population:10000,name:"Peremishlani",country:"Ukraine",region:"Pustomuty"},
    {population:100440,name:"Komo",country:"Italy",region:"Puy"},
    {population:5555555,name:"Seul",country:"Koreya",region:"Pty"},
    {population:1034330,name:"Afiny",country:"Grecia",region:"Pusto"},
];
// -  Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// -  проитерировать каждый массив из задания 5,6,7 при помощи while.
let i=0;
while (i<cars.length){
    console.log(cars[i]);
    i++;
}
console.log('<br>');
let j=0;
while (j<cities.length){
    console.log(cities[j]);
    j++;
}
// -  проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let k = 0; k < cars.length; k++) {
    const auto = cars[k];
    console.log(auto);
}
for (let k = 0; k < cities.length; k++) {
    const city = cities[k];
    console.log(city);
}
// -  проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (let auto of cars) {
    console.log(auto);
}
for (let city of cities) {
    console.log(city);
}
//-  взять объекты из задания 1 и превратить каждый в json.
let jsonJoin=JSON.stringify(join);
console.log(jsonJoin);
// -  взять json из задания 11 и превратить их обратно в объекты.
// let jsonJoin1=JSON.parse(join);
// console.log(jsonJoin1);
// -  взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
let jsonJMassve=JSON.stringify(cars);
console.log(jsonJMassve);

// -  взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
let jsonJMassve2=JSON.stringify(cities);
console.log(jsonJMassve2);
// -  взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// -  Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let dog={
//     name:"GAR",
//     age:2,
//     home:"la",
//     skills:[3,2,1],
//     weight:44
// };
// for (const dogs of dog.skills) {
//     console.log(dogs)
// }
// -  Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// -  при помощи fetch (как в примере) получить от jsonplaceholder все todos. При помощи document.write() вывести их в браузер. Поместить каждый отдельный обеъкт в блок, а его свойства в свои отделные блоки.
// -  при помощи fetch (как в примере) получить от jsonplaceholder все users. вывести их при помощи цикла в консоль
// -  при помощи fetch (как в примере) получить от jsonplaceholder все users. вывести их при помощи цикла и document.write в документ
// -  Из массива с пользователями при помощи цикла вытянуть адресса пользователей и записать(скопировать) их в другой пустой массив.
// let arrEmpty=[];
// for (let k = 0; k < dog.skills.length; k++) {
//     let dogs2=dog.skills[k];
//     arrEmpty.push(dogs2);
//     console.log(arrEmpty);
// }
    // let users = [{name: 'vasya', age: 31, status: false, address:{city:'Lviv',country:'Ukraine',street:'Shevchenko',houseNumber:1}},
    //     {name: 'petya', age: 30, status: true, address:{city:'New York',country:'USA',street:'East str',houseNumber:21}},
    //     {name: 'kolya', age: 29, status: true, address:{city:'Budapest',country:'Hungary',street:'Kuraku',houseNumber:78}},
    //     {name: 'olya', age: 28, status: false, address:{city:'Prague',country:'Czech',street:'Paster',houseNumber:56}},
    //     {name: 'max', age: 30, status: true, address:{city:'Istanbul',country:'Turkey',street:'Mikar',houseNumber:39}},
    //     {name: 'anya', age: 31, status: false, address:{city:'Rio',country:'Brasil',street:'Ronaldi',houseNumber:5}},
    //     {name: 'oleg', age: 28, status: false, address:{city:'Montreal',country:'Canada',street:'Acusto',houseNumber:90}},
    //     {name: 'andrey', age: 29, status: true, address:{city:'Quebeck',country:'Canada',street:'Binaro',houseNumber:33}},
    //     {name: 'masha', age: 30, status: true, address:{city:'Moscow',country:'Russia',street:'Gogolia',houseNumber:1}},
    //     {name: 'olya', age: 31, status: false, address:{city:'Portland',country:'USA',street:'Forest str',houseNumber:4}},
    //     {name: 'max', age: 31, status: true, address:{city:'Cairo',country:'Egypt',street:'Seashore',houseNumber:45}}];
// - Даны 2 массива c равным количеством объектов. Соеденить в один объект пользователя и город с сответсвующими id и user_id записав этоти объекты в новый  массив. При помощи цикла с вложеным циклом
// Частичный пример реультата :             let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}]
// Массивы:
    let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];
for (let user of usersWithId) {
for (const city of citiesWithId) {
    if(user.id===city.user_id){
        let r=Object.assign(user,city);
        console.log(r);
    }
}}
let users = [{name: 'vasya', age: 31, status: false, address:{city:'Lviv',country:'Ukraine',street:'Shevchenko',houseNumber:1}},
    {name: 'petya', age: 30, status: true, address:{city:'New York',country:'USA',street:'East str',houseNumber:21}},
    {name: 'kolya', age: 29, status: true, address:{city:'Budapest',country:'Hungary',street:'Kuraku',houseNumber:78}},
    {name: 'olya', age: 28, status: false, address:{city:'Prague',country:'Czech',street:'Paster',houseNumber:56}},
    {name: 'max', age: 30, status: true, address:{city:'Istanbul',country:'Turkey',street:'Mikar',houseNumber:39}},
    {name: 'anya', age: 31, status: false, address:{city:'Rio',country:'Brasil',street:'Ronaldi',houseNumber:5}},
    {name: 'oleg', age: 28, status: false, address:{city:'Montreal',country:'Canada',street:'Acusto',houseNumber:90}},
    {name: 'andrey', age: 29, status: true, address:{city:'Quebeck',country:'Canada',street:'Binaro',houseNumber:33}},
    {name: 'masha', age: 30, status: true, address:{city:'Moscow',country:'Russia',street:'Gogolia',houseNumber:1}},
    {name: 'olya', age: 31, status: false, address:{city:'Portland',country:'USA',street:'Forest str',houseNumber:4}},
    {name: 'max', age: 31, status: true, address:{city:'Cairo',country:'Egypt',street:'Seashore',houseNumber:45}}];
const col=document.createElement('div');
for (let k = 0; k < users.length; k++) {
    const user = users[k];
    const temp=document.createElement('div');
    temp.innerHTML=`${user.age},${user.name}`;
    col.appendChild(temp)
}
document.body.appendChild(col);

const tab= document.createElement('table');
for (let k = 0; k < 4; k++) {
    const tr= document.createElement('tr');
    tab.appendChild(tr);
}
const td= document.createElement('td');
tr.appendChild(td);
document.body.appendChild(tab);

let b=document.getElementById("ter");
b.style.color='red';
