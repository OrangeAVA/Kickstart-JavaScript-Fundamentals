// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
document.addEventListener("DOMContentLoaded", loadTasks);
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;
    
    taskList.appendChild(li);
    saveTasks();

    // Event listeners for buttons
    li.querySelector(".complete-btn").addEventListener("click", completeTask);
    li.querySelector(".delete-btn").addEventListener("click", deleteTask);

    taskInput.value = "";
}

function completeTask(event) {
    event.target.parentElement.parentElement.classList.toggle("completed");
    saveTasks();
}

function deleteTask(event) {
    event.target.parentElement.parentElement.remove();
    saveTasks();
}

// Save tasks to local storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").innerText,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;
        if (task.completed) li.classList.add("completed");
        taskList.appendChild(li);

        li.querySelector(".complete-btn").addEventListener("click", completeTask);
        li.querySelector(".delete-btn").addEventListener("click", deleteTask);
    });
}
