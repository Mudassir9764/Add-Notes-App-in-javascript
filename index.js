console.log("This is index.js");
//Todos"
//1.Store all the deta to the localStorage:
//2.Give another column as an option to delete the book
//3.Add a scroll bar to the view

//Constructor:
function Book(name,auther,type) {
    this.name=name;
    this.auther=auther;
    this.type=type;
}
function Display() {
    
}
//Add method to display prototype
Display.prototype.add=function (book) {
    console.log("Adding to Ui");
}
tableBody=document.getElementById('tableBody');
let uiString=`<tr>
           <td>${book.name} </td>   
           <td>${book.auther} </td>   
           <td>${book.type} </td>   
            </tr>`

tableBody.innerHtml +=uiString;
}
//Implement the clear Function
Display.prototype.clear=function () {
    let libraryForm=document.getElementById('libraryForm');
    libraryForm.reset()
}
//Implement the validate function
Display.prototype.validate=function (book) {
    if (book.name.length<2||book.auther.length<2) {
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.show=function (type,displayMessage) {
    let massage.innerHtml=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong></strong>`
}