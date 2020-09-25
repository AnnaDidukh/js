//1
// let non=document.getElementById('d');
// non.onclick=()=> {
//     non.style.display = 'none'
// };
// let non=document.getElementById('d');
// non.onclick= ev => {
//     ev.target.style.display = 'none'
// };
// let btn=document.getElementById('d');
// btn.onclick=ev=>{
//     const myInput = document.getElementById('myInput');
//     const value = myInput.value;
//     if(value<18 && value>0){
//         alert('Sorry.You are young.Bye')
//     }
//     if(value<=0){
//         alert('value is negative')
//     }
//     if(value>18){
//         alert('Welcome')
//     }
// };
// const a1 = document.getElementById('a1');
// const submenu = document.getElementById('menu');
// let x = false;
// a1.onclick = ev => {
//     if (x) {
//         submenu.style.display = 'block';
//         x = false;
//     } else {
//         submenu.style.display = 'none';
//         x = true;
//     }
// };
// let topic=[
//     {title:'Lorem',text:'Lorem ipsum when i see you,i fall in love'},
//     {title:'Lorem',text:'Lorem ipsum when i see you,i fall in love'},
//     {title:'Lorem',text:'Lorem ipsum when i see you,i fall in love'},
//     {title:'Lorem',text:'Lorem ipsum when i see you,i fall in love'},
//     {title:'Lorem',text:'Lorem ipsum when i see you,i fall in love'},
// ];
// topic.forEach(item => {
//     const div=document.createElement('div');
//     const h2=document.createElement('h2');
//     const p=document.createElement('p');
//     const btn=document.createElement('button');
//     btn.innerText='Hide';
//     let x=false;
//     btn.onclick=ev=> {
//        if(x) {
//         p.style.display = 'block';
//         x=false;
//        }else{
//         p.style.display = 'none';
//         x=true;
//         }
//     };
//     h2.innerHTML=item.title;
//     p.innerHTML=item.text;
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(btn);
//     content.appendChild(div);
// });
// let photoMove=[
//     {id:1,img_adr: 'one.jpg'},
//     {id:2,img_adr: 'two.jpg'},
//     {id:3,img_adr: 'three.jpg'},
// ];
//
// const content=document.getElementById('content');
// const img=document.createElement('img');
// const btnLeft=document.createElement('button');
// const btnRight=document.createElement('button');
// btnLeft.innerHTML='Left';
// btnRight.innerHTML='Right';
// content.appendChild(img);
// content.appendChild(btnLeft);
// content.appendChild(btnRight);
//
// let index=0;
// img.width=300;
// img.src=photoMove[index].img_adr;
//
// btnLeft.onclick=()=>{
//     if(index-1<0){
//         index=photoMove.length-1;
//     }else{
//         index=index-1;
//     }
//     img.src=photoMove[index].img_adr;
// };
// btnRight.onclick=()=>{
//     if(index+1>photoMove.length-1){
//         index=0
//     }else{
//         index=index+1;
//     }
//     img.src=photoMove[index].img_adr;
// };
const arrayH2=document.getElementsByTagName('h2');
const content= document.getElementById('content');
const wrap= document.getElementById('wrap');
const ul=document.createElement('ul');
for (let i = 0; i < arrayH2.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    let yakor = 'yakor' + 1;

    a.href = '#' + yakor;
    arrayH2[i].setAttribute('id', yakor);
    a.innerHTML = arrayH2[i].innerText;
    li.appendChild(a);
    ul.appendChild(li);
}
content.appendChild(ul);


