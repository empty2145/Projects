const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make dinner', 
    dueDate: '2025-06-25'
}, {
    name: 'wash dishes',
    dueDate: '2025-06-25'
}];
renderTodoList();

function renderTodoList() {

    //generating the html
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.todo-list').innerHTML = todoListHTML;

    
    document.querySelectorAll('.delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            saveToStorage();
            renderTodoList();
        });
    });

}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });


function addTodo() {
     const inputDocument = document.querySelector('.js-name-input');
     const name = inputDocument.value;

     const dateInputElement = document.querySelector('.due-date-input')
     const dueDate = dateInputElement.value;
     
     todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
     });
     inputDocument.value = '';

     renderTodoList();

     saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}