
document.getElementById('addTaskBtn').addEventListener('click', function() {
    let task = document.getElementById('taskInput').value;
    if (task) {
        addTask(task);
        document.getElementById('taskInput').value = '';
    }
    
});

function addTask(task) {
    let li = document.createElement('li');
    li.innerText = task;
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
  }