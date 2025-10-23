// Function to create a task box
function createTask(title, duration, time) {
    return `
        <div class="task">
            <div class="task-info">
                <h3>${title}</h3>
                <p>${duration}</p>
            </div>
            <div class="task-time">${time}</div>
            <div class="checkbox">✓</div>
        </div>
    `;
}

// Define your tasks
const tasks = [
    { title: "Run!", duration: "4 mins", time: "1:21 PM" },
    { title: "Don't Run", duration: "34 mins", time: "12:34 AM" },
    { title: "Bake Brownies", duration: "809 mins", time: "12:09 PM" }
];

// Insert tasks into the task list
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks.map(task =>
        createTask(task.title, task.duration, task.time)
    ).join('');
}

// Call the function when the page loads
window.onload = renderTasks;
