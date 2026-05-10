alert("hello sara");

function  add(){
let input=document.getElementById("input");
let value=input.value;
let checkbox=document.createElement("input");
checkbox.type="checkbox";
let li=document.createElement("li");
let ul=document.getElementById("list");
 let btn= document.createElement("button");
 btn.innerHTML="🗑️";
li.append(checkbox,value, btn);
ul.append(li);
input.value="";

checkbox.addEventListener("click", function effect(){
    if (checkbox.checked){
        li.style.textDecoration= "line-through";
        li.style.color="grey";
    }
    else{
         li.style.textDecoration= "none";
    }

})


 btn.addEventListener("click", function del(){
        ul.removechild("li");
    })












}