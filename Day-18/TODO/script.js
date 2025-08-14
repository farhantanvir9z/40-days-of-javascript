console.log("Project: TODO");

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value;

    if (task.trim() === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = task;
    li.appendChild(span);

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.style.marginLeft = "5px";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };
    li.appendChild(completeBtn);
    
    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.style.marginLeft = "5px";
    editBtn.style.marginRight = "5px";
    editBtn.onclick = function () {
    const editedTask = prompt("Change the task") || "$$$$";
  this.parentElement.firstElementChild.innerText = editedTask;
    }
    li.appendChild(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

function filterTasks() {
    // take the value of search input
    const searchInputValue = document.querySelector("#searchInput").value;
    console.dir(document.querySelector("#searchInput"))
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(elem => {
        elem.style.display = elem.innerText
            .toLowerCase()
            .trim()
            .includes(searchInputValue.toLowerCase().trim())
            ? "block"
            : "none";
    });
}
