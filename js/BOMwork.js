const form1=document.getElementById('form1');
getDataForm(form1);
function saveForm(t) {
    SetDataForm(t);
}
function SetDataForm(tag) {
    for (let i = 0; i < tag.length; i++)
       if(tag.children[i].name==='check' || tag.children[i].name==='radio'){
           tag.children[i].checked
           ?tag.children[i].value = true
            : tag.children[i].value=false
       }
}
function getDataForm(tag) {
    for (let i = 0; i < localStorage.length; i++) {
       if(localStorage.hasOwnProperty(tag.children[i].id)){
           tag.children[i].value=localStorage.getItem(tag.children[i].id);
           if(tag.children[i].value==='true'){
               tag.children[i].setAttribute('checked','checked');
           }
       }

    }

}
