//---array methods
// let array=[1,4,5,1,2];
// let array2=['2','4','35','1'];
// let out=array2.sort();
// console.log(out);
//
// let array3=['2','4','35','1'];
// let out2=array2.sort((a, b) => a-b);
// console.log(out2);
//
// let array4=['Taras','Dima','Volodya','Nazar'];
// let out3=array4.sort((a, b) =>
// { if(a<b){
//     return -1;
// }
// if(a>b)
//     return 1;
// });
// console.log(out3);

// let array=[1,44,9,1,2];
//
// let newfil=array.filter((number)=>{
//     // return number>10;
//     return number%3===0;
// });
// console.log(newfil);

// let array=[1,44,9,1,2];
//
// let newE=array.forEach((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });
//
// let array=[1,44,9,1,2];
// let num = array.map(value => {
//     return value +='%';
// });
// console.log(num);

// let array4=['Taras','Dima','Volodya','Nazar'];
// let find=array4.find(value => {
//   return value.startsWith('N');
// });
// console.log(find);
//
// let findI=array4.findIndex(value => value.length<5);
// console.log(findI);
//
// let flat = array4.flat(2);//змінює глибину,масив в масиві виведе розкладений масив
// console.log(flat);

// let some=array4.some(value => value.length<6);
// console.log(some);//для символів
//
// let every=array4.every(value => value<6);
// console.log(every);//для чисел
// let kol=array4.reduce((previousValue,currentValue)=>{
//     return previousValue+currentValue;
// }0);
// console.log(kol);//має в собі цикл,може виконувати зразу якусь дію

//-------callback
// function clearHouse(isJobDone,cb){
//     if(isJobDone){
//         cb(null,200);
//     }  else {
//         cb('clean house',null);
//     }
// }
//
// clearHouse(true, function (err,reward) {
//     if(err){
//         console.log(`SMTH wrong ${err}`);
//     } else{
//         console.log(`I got ${reward}`);
//     }
// });
//----наслідування на прототипах
// function Hamster(name) {
//     this.name=name;
//     this.stomacth=[];
// }
// Hamster.prototype.findFood=function (eat) {
//     this.stomacth.push(eat);
// };
// let Scothc=new Hamster('Scoth');
// let Lilka=new Hamster('Lilka');
// Scothc.findFood('yabko');
// Scothc.findFood('Grushka');
// console.log(Scothc.stomacth, 's');
// console.log(Lilka.stomacth, 'L');
//Якщо створювати наслідування то тільки
// Hamster.prototype=Object.create(Animal.prototype)
//homework
let arr=[1,2,40,2,3,9,6,7,5,7,5,6,3,4,2,4,2,5,7,6];
// let sort=arr.sort();
// console.log(sort);
// let sort1=arr.sort((a,b) =>b-a );
// console.log(sort1);
// let filter=arr.filter(value => {
//     return value % 3===0
// });
// console.log(filter);
//
// let filter2=arr.filter(value => {
//     return value % 10===0
// });
// console.log(filter2);

// let iter=arr.forEach((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     // console.log(array);
// });
// console.log(iter);
//
// let map=arr.map(value => {
//     return value *3;
// });
// console.log(map);
// console.log(arr);
//
// let array=['Taras','Anna','Dima','Volodya','Nazar','Katya','Lily','Vika','Elizabet','Mia','Nia'];
// let sort1=array.sort((a,b) =>{
//     { if(a<b){
//         return -1;
//     }
//         if(a>b)
//             return 1;
//     }});
// console.log(sort1);
//
// let sort2=array.sort((a,b) =>{
//     { if(a>b){
//         return -1;
//     }
//         if(a<b)
//             return 1;
//     }});
// console.log(sort2);
//
// let map=array.map(value => {
//     return value +='!';
// });
// console.log(map);
// console.log(array);
//
// let filt=array.filter(value => value.length<4);
// console.log(filt);
//
// function  calc(a,b,cb) {
//     return cb(a,b);
// }
// let sum=calc(2,2,(a,b)=>{
//     return(a + b);
// });
// console.log(sum);
