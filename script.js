const taskBox = document.getElementById('taskBox');
const addBtn = document.getElementById('addBtn');
const listOfTasks = document.getElementById('listOfTasks');

addBtn.addEventListener('click', () => {
  const newTask = taskBox.value.trim();

  if (newTask !== '') {
    const singleTask = document.createElement('li');
    singleTask.textContent = newTask;

    listOfTasks.appendChild(singleTask);
    taskBox.value = '';
  } else {
    alert('Oops! Please type something.');
  }
});

taskBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});
