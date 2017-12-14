// var todoList = new app.views.TodoList();

app.views.TodoListView = function() {
    // this.todoList = new TodoList();
    this.ENTER = 13;
    this.handleEvent('addTodo');
    this.handleEvent('editTodo', this.editTodo);
}

app.views.TodoListView.prototype.getDeleteTodo = function(self) {
    var id = self.attr('data-id'); // attribute
}

app.views.TodoListView.prototype.deleteTodo = function(id) {
    var todoList = getTodoList()
    todoList.deleteTodo(id);
}
app.views.TodoListView.prototype.addTodo = function(newTodo) {
    app.todoList.addTodo(newTodo);
    console.log('listTodo ', app.todoList);
    var labelTodo = '<li data-id = ' + newTodo.id + ' >'+ 
                        '<input type="checkbox" class="check-todo">' +
                        '<input type="text" class="edit-todo" value=""> ' + 
                        '<label class="text-todo"> '+ newTodo.text+ '</label> ' + 
                        '<button class="delete-todo"></button> ' +  
                    '</li>';
    $('.display').prepend(labelTodo);
    $('.edit-todo').hide();
    $('.delete-todo').hide();
    $('.new-todo').val("");
}

app.views.TodoListView.prototype.editTodo = function(currentTodo) {
    var index = null;
    app.todoList.todos.find(function(todo, i) {
        index = i;
        return todo.id === currentTodo.id;
    });
    app.todoList.todos[index] = currentTodo;
    console.log(app.todoList);
}
app.views.TodoListView.prototype.handleEvent = function(event, handler) {
    var self = this;
    switch (event) {
      case 'addTodo':
        $('header').on('keypress', '.new-todo', function(e) {
          if(e.keyCode === self.ENTER) {
            var newTodo = new app.models.Todo($('.new-todo').val());
            self.addTodo(newTodo);
         }
        })
        break;
    case 'editTodo':
        $('.display').on('focusout', '.edit-todo', function(e) {
            var id = $(this).closest('li').attr('data-id');
            console.log('id ', id)
            var todo = new app.views.TodoView().finishEdit($(this), id);
            handler(todo);
        });
      break;
      case 'deleteTodo':
      $('.display').on()
        default:
        break;
    }
}
