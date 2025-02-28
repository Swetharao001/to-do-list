document.addEventListener("DOMContentLoaded", function () {
  const enterTask = document.getElementById("enterTask");
  const taskDescription = document.getElementById("taskDescription");
  const addTaskButton = document.querySelector(".addTask");
  const taskList = document.querySelector(".tasklist");
  const clearCompletedButton = document.querySelector(".clear-completed-tasks");

  //-----------Function to add a task
function addTask() {
  const taskTitle = enterTask.value.trim();
  const description = taskDescription.value.trim();

  if (taskTitle === "") {
    alert("Please enter a task title!");
    return;
  }

  //-----------Create task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  //-----------Task Left Side (Checkbox )
  const checkbox = document.createElement("span");
  checkbox.classList.add("task-checkbox");
  checkbox.innerHTML = "&#9711;"; // i searched for a circle icon in google and i found this code "&#9711;"

  checkbox.addEventListener("click", function () {
    taskContent.classList.toggle("completed");
    checkbox.innerHTML = taskContent.classList.contains("completed") ? "&#10004;" : "&#9711;"; // Tick inside a circle (✔)
  });

  //----------------Task Content
  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  //-----------------Task Title
  const taskTitleElement = document.createElement("span");
  taskTitleElement.textContent = taskTitle;
  taskTitleElement.classList.add("task-title");

  //------------------Task Description (if provided)
  if (description) {
    const taskDescElement = document.createElement("p");
    taskDescElement.textContent = description;
    taskDescElement.classList.add("task-desc");
    taskContent.appendChild(taskDescElement);
  }

  taskContent.appendChild(taskTitleElement);

  //-------------------Delete Task Button ( with the Trash Icon)
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function () {
    taskItem.classList.add("fade-out");
    setTimeout(() => {
      taskItem.remove();
    }, 300);
  });

  // Append elements to task item
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);

  // Append task item to list
  taskList.appendChild(taskItem);

  // Add animation
  taskItem.classList.add("fade-in");

  // Clear input fields
  enterTask.value = "";
  taskDescription.value = "";
}

  // Add task event listener
  addTaskButton.addEventListener("click", addTask);

  // Press 'Enter' to add task
  enterTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Clear completed tasks
  clearCompletedButton.addEventListener("click", function () {
    const tasks = document.querySelectorAll(".task-item");
    tasks.forEach(task => {
      const taskContent = task.querySelector(".task-content");
      if (taskContent && taskContent.classList.contains("completed")) {
      task.classList.add("fade-out");
      setTimeout(() => {
        task.remove();
      }, 300);
    }
    });
  });
});
