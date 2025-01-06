const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';

    const deleteButton = listItem.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });
});
