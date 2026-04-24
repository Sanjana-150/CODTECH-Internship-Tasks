const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = "";
}