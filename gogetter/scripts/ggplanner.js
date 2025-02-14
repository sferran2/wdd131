// PLANNER
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get("date");
    const selectedDateElement = document.getElementById("selected-date");
    const startDateInput = document.getElementById("start-date");
    const taskListContainer = document.getElementById("task-list");

    if (selectedDateElement) {
        selectedDateElement.textContent = selectedDate;
    }

    if (startDateInput) {
        startDateInput.value = selectedDate; // Auto-fill start date
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    console.log("Tasks from localStorage:", tasks);

    function displayTasks() {
        const taskListContainer = document.getElementById("task-list");

        if (!taskListContainer) {
            // console.error("Element with ID 'task-list' not found.");
            return;
        }

        console.log("Displaying tasks");
        taskListContainer.innerHTML = "";

        for (let date in tasks) {
            if (Array.isArray(tasks[date])) {
                tasks[date].forEach((task, index) => {
                    const taskItem = document.createElement("div");
                    taskItem.classList.add("task-item");

                    let priorityColor = "#ccc";
                    if (task.priority === "High") priorityColor = "#ff4d4d";
                    if (task.priority === "Medium") priorityColor = "#ffa500";
                    if (task.priority === "Low") priorityColor = "#32cd32";

                    const startText = task.startDate ? task.startDate : "Not set";

                    taskItem.innerHTML = `
                        <div class="task-header">
                            <strong class="${task.completed ? "completed-task" : ""}">${task.taskName}</strong>
                            <br>Date: ${date} | Start: ${startText} | Due: ${task.dueDate} - <span style="color:${priorityColor}">${task.priority}</span>
                        </div>
                        <p>${task.taskDetails.join(", ")}</p>
                        <div class="task-actions">
                            <label class="checkbox-label">
                                <input type="checkbox" class="complete-task" data-date="${date}" data-index="${index}" ${task.completed ? "checked" : ""}> Completed
                            </label>
                            <button class="edit-task" data-date="${date}" data-index="${index}">Edit</button>
                            <button class="delete-task" data-date="${date}" data-index="${index}">Delete</button>
                        </div>
                    `;

                    taskListContainer.appendChild(taskItem);
                });
            } else {
                console.warn(`Tasks for ${date} is not an array:`, tasks[date]);
            }
        }

        document.querySelectorAll(".complete-task").forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                const date = this.getAttribute("data-date");
                const index = this.getAttribute("data-index");
                tasks[date][index].completed = this.checked;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                displayTasks();
            });
        });

        document.querySelectorAll(".delete-task").forEach(button => {
            button.addEventListener("click", function () {
                const date = this.getAttribute("data-date");
                const index = this.getAttribute("data-index");
                deleteTask(date, index);
            });
        });

        document.querySelectorAll(".edit-task").forEach(button => {
            button.addEventListener("click", function () {
                const date = this.getAttribute("data-date");
                const index = this.getAttribute("data-index");
                editTask(date, index);
            });
        });
    }

    function deleteTask(date, index) {
        tasks[date].splice(index, 1);
        if (tasks[date].length === 0) {
            delete tasks[date];
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    }

    function editTask(date, index) {
        const task = tasks[date][index];

        document.getElementById("task-name").value = task.taskName;
        document.getElementById("start-date").value = task.startDate;
        document.getElementById("due-date").value = task.dueDate;
        document.getElementById("task-details").value = task.taskDetails.join(", ");
        document.getElementById("task-priority").value = task.priority;

        const submitButton = document.querySelector("#task-form button[type='submit']");
        submitButton.textContent = "Update Task";
        submitButton.setAttribute("data-edit-date", date);
        submitButton.setAttribute("data-edit-index", index);
    }

    displayTasks();

    const taskForm = document.getElementById("task-form");
    if (taskForm) {
        taskForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const taskName = document.getElementById("task-name").value;
            const startDate = document.getElementById("start-date").value;
            const dueDate = document.getElementById("due-date").value;
            const taskDetails = document.getElementById("task-details").value.split(",");
            const taskPriority = document.getElementById("task-priority").value;

            if (!startDate) {
                alert("Please enter a valid start date.");
                return;
            }

            if (new Date(dueDate) <= new Date(startDate)) {
                alert("Due date must be after the start date.");
                return;
            }

            const submitButton = document.querySelector("#task-form button[type='submit']");
            const editDate = submitButton.getAttribute("data-edit-date");
            const editIndex = submitButton.getAttribute("data-edit-index");

            if (editDate !== null && editIndex !== null) {
                tasks[editDate][editIndex] = { 
                    taskName, 
                    startDate, 
                    dueDate, 
                    taskDetails, 
                    priority: taskPriority, 
                    completed: tasks[editDate][editIndex].completed 
                };

                submitButton.textContent = "Add Task";
                submitButton.removeAttribute("data-edit-date");
                submitButton.removeAttribute("data-edit-index");
            } else {
                if (!tasks[startDate]) {
                    tasks[startDate] = [];
                }
                tasks[startDate].push({ 
                    taskName, 
                    startDate, 
                    dueDate, 
                    taskDetails, 
                    priority: taskPriority, 
                    completed: false 
                });
            }

            localStorage.setItem("tasks", JSON.stringify(tasks));
            console.log("Updated tasks:", tasks);

            this.reset();
            displayTasks();
        });
    }
});
