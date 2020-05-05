const task = document.getElementById('task');
const form = document.querySelector('form');
const listElement = document.querySelector('#display_todo ul');

function populateToDo(toDoItem, checked=false) {
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    const newLi = document.createElement('li');
    newLi.innerText = toDoItem + '   '
    if (checked) {
        newLi.classList.add('complete');
    }

    const btn = document.createElement('button');
    btn.innerText = "Remove";
    
    newLi.prepend(checkbox);
    newLi.append(btn);
    listElement.append(newLi);
}

if (localStorage.getItem('todo')) {
    toDoItemsInStorage = JSON.parse(localStorage.getItem('todo'));
    for(toDoItem of toDoItemsInStorage) {
        populateToDo(toDoItem.task, toDoItem.checked );
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    populateToDo(task.value);
    tasksInStorage = JSON.parse(localStorage.getItem('todo'));
    if (tasksInStorage === null) {
        tasksInStorage = [{task: task.value, checked: false}];
    } else {
        tasksInStorage.push({task: task.value, checked: false});
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
            if (parent.innerText.includes(tasksInStorage[t].task)) {
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
        tasksInStorage = JSON.parse(localStorage.getItem('todo'));
        for(t in tasksInStorage) {
            if (parent.innerText.includes(tasksInStorage[t].task)) {
                tasksInStorage[t].checked = event.target.checked;
            }
        }
        localStorage.setItem('todo', JSON.stringify(tasksInStorage));
    }
});
