var list=document.getElementById("list");


function addTodo(){
    var input=document.getElementById("input");
    var li=document.createElement('li');
    li.style.fontSize="34px";
    li.setAttribute("class","li_text")
   
    var liText=document.createTextNode(input.value);
    var val=document.createElement("div");
    var val_line=document.createElement("hr");
    val_line.setAttribute("class","line");
    var val_edit=document.createElement("span");
   
    


    li.appendChild(liText);
    list.appendChild(li);

    // DELETE//
    var delbtn=document.createElement("button");
    var del_Text=document.createTextNode("Delete")

    delbtn.setAttribute("onclick","deleteItems(this)")
    delbtn.setAttribute("class","Delete_btn")
    delbtn.style.color="gray";

//EDIT//
    var edit_btn=document.createElement("button");
    edit_btn.setAttribute("onclick","editItems(this)")
    var edit_Text=document.createTextNode("Edit")
 
    edit_btn.setAttribute("class","Edit_btn")
    edit_btn.style.color="gray";

    li.appendChild(val_line)
    
    val.appendChild(delbtn);
    li.appendChild(val);

    val_edit.appendChild(edit_btn);
    li.appendChild(val_edit);
    

    delbtn.appendChild(del_Text);
    li.appendChild(delbtn);

    edit_btn.appendChild(edit_Text);
    li.appendChild(edit_btn);

    input.value="";
  
    
    
    
   
}
function deleteItems(e){
    e.parentNode.remove();

}
function editItems(e){
    
    var Edit=prompt("Enter Updatd Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=Edit;
}

function hand() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf25a;";
    setTimeout(function () {
        a.innerHTML = "&#xf256;";
      }, 500);
    setTimeout(function () {
        a.innerHTML = "&#xf259;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf256;";
      }, 1500);
  }
  hand();
  setInterval(hand, 2000);
 

function  Alldelete(){
    list.innerHTML="";
}
  