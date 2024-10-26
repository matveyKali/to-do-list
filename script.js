const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText === '') return;
    createTaskElement(taskText);
    taskInput.value = '';
});

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Изменить';
    editBtn.className = 'editBtn';
    editBtn.addEventListener('click', function() {
        const updatedTaskText = prompt('Измените задачу, например на "Отпиздить Рому))":', taskText);
        if (updatedTaskText !== null) {
            li.firstChild.nodeValue = updatedTaskText;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Выполнено';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
