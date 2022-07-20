const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function(e){
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();
};

function addTask(description){
    const taskContainer = document.createElement('div')
    const newTask = document.createElement('input')
    const taskLabel1 = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel1.setAttribute('for', description);
    taskLabel1.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel1);

    taskList.appendChild(taskContainer);
}
