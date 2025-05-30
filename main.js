function tcreate() {
  
 const tname =document.getElementById('tinput').value; // taak name is stored in tname (from input field)
 
 if (tname == "") 
   {
  alert("FIRST ENTER YOUR TASK DEAR 😉"); 
   } //if user doesn't enter a name shows alert message
   
   else {
   
 let newt = document.createElement("div");//div is created
  
  newt.setAttribute("id",Date.now());
  //used to generate a random id
  
 newt.innerHTML= "<b>~></b>"+tname+"  <button onclick='tdel(this.parentElement.id)'> ✓ </button>";
 //adds name and delete button

 document.body.appendChild(newt);
 //appends created div to body
 tinput.value='';
 //after completing everything naming space is cleared
 }

}


function tdel(tid)
{
  document.getElementById(tid).remove();
  //tid takes value of its parent div
  //when button is clicked whole div is cleared 
}