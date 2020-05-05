const task = document.getElementById('task');
const form = document.querySelector('form');
const listElement = document.querySelector('#display_todo ul');

function populateToDo(toDoItem) {
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox"

    const newLi = document.createElement('li');
    newLi.innerText = toDoItem + '   '

    const btn = document.createElement('button');
    btn.innerText = "Remove";
    
    newLi.prepend(checkbox);
    newLi.append(btn);
    listElement.append(newLi);
}

if (localStorage.getItem('todo')) {
    toDoItemsInStorage = JSON.parse(localStorage.getItem('todo'));
    for(toDoItem of toDoItemsInStorage) {
        populateToDo(toDoItem);
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    populateToDo(task.value);
    tasksInStorage = JSON.parse(localStorage.getItem('todo'));
    if (tasksInStorage === null) {
        tasksInStorage = [task.value];
    } else {
        tasksInStorage.push(task.value);
    }
    console.log(tasksInStorage);
    localStorage.setItem('todo', JSON.stringify(tasksInStorage));
    task.value = ''
});

listElement.addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON") {
        parent = event.target.parentElement;
        parent.remove();
        tasksInStorage = JSON.parse(localStorage.getItem('todo'));
        for(t in tasksInStorage) {
            if (parent.innerText.includes(tasksInStorage[t])) {
                tasksInStorage.splice(t, 1);
            }
        }
        localStorage.setItem('todo', JSON.stringify(tasksInStorage));
    }
});

listElement.addEventListener('click', function(event) {
    if (event.target.tagName === "INPUT") {
        parent = event.target.parentElement;
        parent.classList.toggle('complete');
    }
});
