localStorage.setItem('myFirstLocalKey','Hello');
// let some_value=localStorage.getItem('myFirstLocalKey');
// document.write(some_value);
// localStorage.clear();
// localStorage.removeItem('myFirstLocalKey');

localStorage.setItem('me','{name:"Anya",age:18}');
let some_value=localStorage.getItem('me');
console.log(some_value);

let inpt=document.getElementById('inpt');
oninput=()=>{
  const value=inpt.value;
  localStorage.setItem('value',value);
};
// console.log(window);
// console.log(document);
// console.log(window.navigator);
// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// });
// let vid=document.getElementById('vid');
// navigator.mediaDevices.getUserMedia({video:true})
// .then(video=>{
//     vid.srcObject=video;
//     vid.play();
// });
// history.back();
// let x=true;
// let number= x ? 10 : null;
// setTimeout(()=>{
//     console.log(1);
// },2000);
// setInterval(()=>{
//     console.log(3);
// },1000);
//  inpt.onmouseenter=()=>{
//     console.log("obe");
//      setInterval(()=>{
//          console.log(3);
//      });
// };
