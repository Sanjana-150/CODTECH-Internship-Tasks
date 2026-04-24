function addTask() {
var input = document.getElementById("taskInput");
var task = input.value;

if(task != ""){
var li = document.createElement("li");
li.innerHTML = task;

document.getElementById("taskList").appendChild(li);

input.value="";
}
}