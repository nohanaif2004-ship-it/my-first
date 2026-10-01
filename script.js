const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {

    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    newTask.addEventListener("click", function() {
        newTask.style.textDecoration = "line-through";
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function(event) {
        event.stopPropagation();
        newTask.remove();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = "";
});