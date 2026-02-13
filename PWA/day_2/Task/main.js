
// --- IndexedDB setup using idb ---
const dbPromise = idb.open("todo-db", 2, (upgradeDB) => {
    if (!upgradeDB.objectStoreNames.contains("tasks")) {
        const store = upgradeDB.createObjectStore("tasks", {
            keyPath: "id",
            autoIncrement: true,
        });
        store.createIndex("notified", "notified");
        store.createIndex("dueDate", "dueDate");
    }
});

async function addTask(task) {
    const db = await dbPromise;
    const tx = db.transaction("tasks", "readwrite");
    const store = tx.objectStore("tasks");
    await store.add({
        ...task,
        notified: false,
        createdAt: Date.now(),
    });
    await tx.complete;
}

async function getAllTasks() {
    const db = await dbPromise;
    const tx = db.transaction("tasks", "readonly");
    const store = tx.objectStore("tasks");
    return await store.getAll();
}

async function deleteTask(id) {
    const db = await dbPromise;
    const tx = db.transaction("tasks", "readwrite");
    const store = tx.objectStore("tasks");
    await store.delete(id);
    await tx.complete;
}

async function updateTask(task) {
    const db = await dbPromise;
    const tx = db.transaction("tasks", "readwrite");
    const store = tx.objectStore("tasks");
    await store.put(task);
    await tx.complete;
}

// --- Form Handling ---
const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const dateInput = document.getElementById("date");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const hour = parseInt(hourInput.value, 10);
    const minute = parseInt(minuteInput.value, 10);
    const dateStr = dateInput.value;
    if (!title || isNaN(hour) || isNaN(minute) || !dateStr) {
        alert("Please fill all fields correctly.");
        return;
    }
    const [year, month, day] = dateStr.split('-').map(Number);
    const dueDate = new Date(year, month - 1, day, hour, minute, 0, 0).getTime();
    if (isNaN(dueDate) || dueDate <= Date.now()) {
        alert("Please choose a date and time in the future.");
        return;
    }
    await addTask({ title, dueDate });
    form.reset();
    await renderTable();
});

// --- Table Rendering ---
async function renderTable() {
    const todos = await getAllTasks();
    const tableBody = document.querySelector("#todoTable tbody");
    tableBody.innerHTML = "";
    todos.sort((a, b) => a.dueDate - b.dueDate).forEach((todo) => {
        const row = document.createElement("tr");
        row.id = todo.id;
        if (todo.notified) row.classList.add('notified');
        const titleCell = document.createElement("td");
        titleCell.textContent = todo.title;
        const dueDateCell = document.createElement("td");
        dueDateCell.textContent = new Date(todo.dueDate).toLocaleString();
        const deleteButtonCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", async () => {
            await deleteTask(todo.id);
            await renderTable();
        });
        deleteButtonCell.appendChild(deleteButton);
        row.appendChild(titleCell);
        row.appendChild(dueDateCell);
        row.appendChild(deleteButtonCell);
        tableBody.appendChild(row);
    });
}

// --- Notification for Due Tasks ---
async function checkDueTasks() {
    const now = Date.now();
    const todos = await getAllTasks();
    for (const todo of todos) {
        if (!todo.notified && Math.abs(todo.dueDate - now) < 10000) {
            if (Notification.permission === "granted") {
                // Send notification via service worker
                if (navigator.serviceWorker && navigator.serviceWorker.controller) {
                    navigator.serviceWorker.controller.postMessage({
                        type: "SHOW_TEST_NOTIFICATION",
                        title: "Task Due",
                        body: `Task \"${todo.title}\" is due now!`,
                        icon: "icons-ice-king-512.png"
                    });
                } else if (navigator.serviceWorker) {
                    navigator.serviceWorker.ready.then(function(reg) {
                        if (reg.active) {
                            reg.active.postMessage({
                                type: "SHOW_TEST_NOTIFICATION",
                                title: "Task Due",
                                body: `Task \"${todo.title}\" is due now!`,
                                icon: "icons-ice-king-512.png"
                            });
                        }
                    });
                }
            }
            todo.notified = true;
            await updateTask(todo);
        }
    }
    await renderTable();
}

// --- Test Notification Button ---
document.addEventListener("DOMContentLoaded", () => {
    renderTable();
    setInterval(checkDueTasks, 5000);
    const testBtn = document.getElementById('testNotificationBtn');
    if (testBtn) {
        testBtn.onclick = function() {
            if (Notification.permission === "granted") {
                if (navigator.serviceWorker && navigator.serviceWorker.controller) {
                    navigator.serviceWorker.controller.postMessage({
                        type: "SHOW_TEST_NOTIFICATION",
                        title: "Hello World",
                        body: "Test Notification",
                        icon: "icons-ice-king-512.png",
                        actions: [
                            {action: 'explore', title: 'Link'},
                            {action: 'close', title: 'Close Notification'}
                        ]
                    });
                } else if (navigator.serviceWorker) {
                    navigator.serviceWorker.ready.then(function(reg) {
                        if (reg.active) {
                            reg.active.postMessage({
                                type: "SHOW_TEST_NOTIFICATION",
                                title: "Hello World",
                                body: "Test Notification",
                                icon: "icons-ice-king-512.png",
                                actions: [
                                    {action: 'explore', title: 'Link'},
                                    {action: 'close', title: 'Close Notification'}
                                ]
                            });
                        }
                    });
                }
            } else if (Notification.permission === "default") {
                Notification.requestPermission().then(function(permission) {
                    if (permission === "granted") {
                        testBtn.onclick();
                    } else {
                        alert("You must allow notifications to use this feature.");
                    }
                });
            } else {
                alert("You have blocked notifications for this site. Please enable them in your browser settings if you want to receive reminders.");
            }
        };
    }
});