// CALENDAR
document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.getElementById("calendar-grid"); 
    let today = new Date(); 
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    const monthYearHeader = document.getElementById("month-year");
    const prevMonthButton = document.getElementById("prev-month");
    const nextMonthButton = document.getElementById("next-month");


    function generateCalendar(month, year) {
        if (!calendarContainer) {
            console.error("Calendar container not found!");
            return;
        }

        calendarContainer.innerHTML = "";

        
        const monthName = new Date(year, month, 1).toLocaleString('default', { month: 'long' });
        monthYearHeader.textContent = `${monthName} ${year}`;


        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

        const tasks = JSON.parse(localStorage.getItem("tasks")) || {};

        
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day", "header");
            dayElement.textContent = day;
            calendarContainer.appendChild(dayElement);
        });

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("day");
            emptyCell.style.visibility = "hidden";
            calendarContainer.appendChild(emptyCell);
        }

        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");

            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

       
            const dateNumberContainer = document.createElement("div");
            dateNumberContainer.classList.add("date-number");

            const dayLink = document.createElement("a");
            dayLink.href = `planner.html?date=${dateStr}`;
            dayLink.textContent = day;
            dateNumberContainer.appendChild(dayLink);

            
            dayElement.appendChild(dateNumberContainer);

        
            const tasksContainer = document.createElement("div");
            tasksContainer.classList.add("tasks-container");

            
            if (Array.isArray(tasks[dateStr]) && tasks[dateStr].length > 0) {
                tasks[dateStr].forEach(task => {
                    const taskLink = document.createElement("a");
                    taskLink.href = `planner.html?date=${dateStr}`;
                    taskLink.textContent = task.taskName;
                    taskLink.classList.add("task-link");

                
                    taskLink.style.textDecoration = task.completed ? "line-through" : "none";

                
                    let priorityColor = "#ccc";
                    if (task.priority === "High") priorityColor = "#ff4d4d";
                    if (task.priority === "Medium") priorityColor = "#ffa500";
                    if (task.priority === "Low") priorityColor = "#32cd32";

                    taskLink.style.background = priorityColor;
                    taskLink.style.color = "black";

                    tasksContainer.appendChild(taskLink);
                });
            }

       
            dayElement.appendChild(tasksContainer);

            calendarContainer.appendChild(dayElement);
        }
    }

    generateCalendar(currentMonth, currentYear);


    function updateCalendar() {
        generateCalendar(currentMonth, currentYear);
    }

  
    function goToPreviousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    }

    function goToNextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    }

    prevMonthButton.addEventListener("click", goToPreviousMonth);
    nextMonthButton.addEventListener("click", goToNextMonth);
});

// Footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.querySelector('.last-modified').textContent = `Last Access: ${new Date().toLocaleString()}`;








