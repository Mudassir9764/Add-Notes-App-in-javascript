console.log('This is javascript Notes');
ShowNotes();
//If user add a notes ,add it to local Storage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click" ,function (e) {
  let addTxt=document.getElementById('addTxt');
  
  let notes=localStorage.getItem("notes");
  if (notes == null) {
     notesObj=[];
  }
  else{
    notesObj=JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  addTxt.value="";
  console.log(notesObj);
  ShowNotes();
})
function ShowNotes() {
  let notes=localStorage.getItem("notes");
  if (notes == null) {
    notesObj=[];
 }
 else{
   notesObj=JSON.parse(notes);
 }
 let html="";
 notesObj.forEach(function (element,index) {
   html +=`   <div class="my-2 mx-2 notecard" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">Note ${index+1}</h5>
     <p class="card-text">${element}</p>
     <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delate Note</button>
   </div>
 </div>`
 
 });
 let notesElm=document.getElementById('notes');
 if (notesObj.length != 0) {
   notesElm.innerHTML=html;
 }
 else{
   notesElm.addEventListener.innerHTML=`Nothing to show! Use "Add a Notes"`
 }
}
//Function to delete Notes
function deleteNote(index) {
  console.log("I am deleting notes",index);
  let notes=localStorage.getItem("notes");
  if (notes == null) {
    notesObj=[];
 }
 else{
   notesObj=JSON.parse(notes);
 }
 notesObj.splice(index ,1);
 localStorage.setItem('notes',JSON.stringify(notesObj));
 ShowNotes();
}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(e){
  let inputVal=search.value;
  console.log('Input Event Fire',inputVal);
  let noteCards=document.getElementsByClassName('notecard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt=element.getElementsByTagName('p')[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display='block';}
      else{
        element.style.display='none';
      }
      
    
  })
})
