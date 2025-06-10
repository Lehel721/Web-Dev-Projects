let TodoList = [];

function addTodo() {
    let inputElement = document.querySelector('#todo');
    let todoitem = inputElement.value;
    let dateElement = document.querySelector('#TodoDate');
    let todoDate = dateElement.value;
    
    if(todoitem.trim() === '') return; 
    
    TodoList.push({
        item: todoitem,
        date: todoDate
    });
    
    inputElement.value = ''; 
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let containerelement = document.querySelector('.todoContainer');
    containerelement.innerHTML = '';  
    let newHTML = '';
    for(let i = 0; i < TodoList.length; i++) {
        newHTML += `<div>
                        <div class="todo-text">${TodoList[i].item}</div>
                        <div class="todo-date">${TodoList[i].date || 'No date'}</div>
                        <button class="delete-btn" onclick="TodoList.splice(${i},1); displayItems();">Delete</button>
                    </div>`;
    }
    containerelement.innerHTML = newHTML;  
}