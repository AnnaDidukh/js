let typ = parseInt(prompt("Number"));
let num=+prompt("num1");
let num2=+prompt("num2");
console.log(num+num2);
let name=prompt("Name");
let surname=prompt("surname");
let result=`Hello ${name} ${surname} here`;
console.log(result);
//----------
let arr=[1,2,3,4,"red","blue"];
arr.unshift(2);
arr.push(3);
console.log(arr);
arr.pop();
console.log(arr.length);
let user={
    name:"Anya",
    surname:"Didukh",
    age:18
};
let resultt=Object.keys(user);
console.log(resultt);
console.log(user);
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
let j=0;
while (j<arr.length){
    console.log(arr[j]);
}
//-------------
let arrr = [1,2,3,4,5];
let arr1 =["hh","ff","ee","rr","tt"];
let arr2=[1,2,"er","dd",true];
let arr3=[];
arr3[0]=1;
arr3[1]=2;
arr3[2]=3;
arr3[3]="red";
    let dog={
        name:"GAR",
        age:2,
        home:"la",
        skills:3,
        weight:44
};
    let s=dog.age;
    let g=dog.skills;
    console.log(s+g);
    let book={
        price:105,
        height:50,
        weight:50,
        countl:450
    };
let dog2=["ralf","guffi","fluf","joy","kil"];
let book2=["StivenKing","OksanaSh","PaulKoello"];
let house={
    price:6,
    floor:7,
    rooms:{count:5,color:"white"},
    windows:["circle","kub"],
};
let joy={
    color:red,
    clothes:{count:2,hat:1},
    type:["joke","boy","whitehair"],
};
let perevirka=Object.keys(joy);
let perevirka2=Object.values(house)
console.log(perevirka,perevirka2);
let users2=[
    {name:"Anna",age:22,status:true},
    {name:"Nazar",age:32,status: true},
    {name:"Taras",age:44,status:true}
];
console.log(users2[1].status);
console.log(users2[0].name);
for (let i = num2.length - 1; i >= 0; i--) {
    const num2Element = num2[i];

}
//при підключенні html i id даних в ньому
let content = document.getElementById('content');
console.log(content.innerText);
document.getElementById('content').style.width='100px';
content.style.backgroundColor='red';
for(let i=0; i<arr.length;i++){
    if(i % 2===0){
        console.log(arr[i]);
    }
}
let l=0;
while (l<arr.length){
    if(l%2 === 0){
        console.log(arr[l]);
    }
}
for(let i=0; i<arr.length;i++){
    if(i % 3===0){
        arr[i]="okten";
        console.log(arr[i]);
    }
}
for(let i=0; i<arr.length;i++){
    if(i % 2 !== 0){
        console.log(arr[i]);
    }
}
let emptyAray = [];
let even=2;
for (let i=0; i<50;i++){
    emptyAray[i]=even;
    even+=2;
}
let array1=[];
let array=[1,1,2,3,3,4,4];
let h=0;
while(h<array.length){
    console.log(array[h]);
}
array1.push(array[i]);

let ea=[];
for (let i = 0; i < 100; i++) {
   ea[i]=Math.round(Math.random()*732-8)+8;
}

for (const num of arr) {
    console.log(num);
}

