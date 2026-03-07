const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
});

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    const data = localStorage.getItem("data");
    if (data) listContainer.innerHTML = data;
}

showList();