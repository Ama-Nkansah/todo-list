const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value ===''){
        alert("Add a Task!");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
   }
}



