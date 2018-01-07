// var todoList = new app.views.TodoList();

app.views.TodoListView = function() {
    // this.todoList = new TodoList();
    this.ENTER = 13;
    this.handleEvent('addTodo');
    this.handleEvent('editTodo', this.editTodo);
    this.handleEvent('deleteTodo', this.deleteTodo);
}
app.views.TodoListView.prototype.saveIntoLocal = function() {
    // todoList = [];
    var convertedTodoList = JSON.stringify(app.todoList);  //luu duoi dag string. JSON la dang file luu tru theo 1 format nhat dinh
    localStorage.setItem('todoList', convertedTodoList);
    // var todoList = JSON.parse(localStorage.getItem('todoList'));  //lay ra.
  
    //add todo
    // localStorage.get('todoList', TodoListView);
    console.log('todoList', JSON.parse(localStorage.getItem('todoList')));
  
  }

app.views.TodoListView.prototype.getDeleteTodo = function(self) {

    var id = self.attr('data-id'); // attribute
}

app.views.TodoListView.prototype.deleteTodo = function(id) {
    app.todoList.deleteTodo(id);
}
app.views.TodoListView.prototype.addTodo = function(newTodo) {
    app.todoList.addTodo(newTodo);
    console.log('listTodo ', app.todoList);
    var labelTodo = '<li data-id = ' + newTodo.id + ' >'+ 
                        '<input type="checkbox" class="check-todo">' +
                        '<input type="text" class="edit-todo" value=""> ' + 
                        '<label class="text-todo"> '+ newTodo.text+ '</label> ' + 
                        '<button class="delete-todo">X</button> ' +  
                    '</li>';
    $('.display').prepend(labelTodo);
    $('.edit-todo').hide();
    // $('.delete-todo').hide();
    $('.new-todo').val("");
    this.saveIntoLocal();
}

app.views.TodoListView.prototype.editTodo = function(currentTodo) {
    var index = null;
    app.todoList.todos.find(function(todo, i) {
        index = i;
        return todo.id === currentTodo.id;
    });
    app.todoList.todos[index] = currentTodo;
    this.saveIntoLocal();
}
app.views.TodoListView.prototype.handleEvent = function(event, handler) {
    var self = this;
    switch (event) {
      case 'addTodo':
        $('header').on('keypress', '.new-todo', function(e) {
          if(e.keyCode === app.constant.ENTER) {
            var newTodo = new app.models.Todo($('.new-todo').val());
            self.addTodo(newTodo);
            // var todoListNew = JSON.stringify(app.todoList);
            // localStorage.setItem('todoList', todoListNew);
         }
        })
        break;
    case 'editTodo':
        $('.display').on('focusout', '.edit-todo', function(e) {
            var id = $(this).closest('li').attr('data-id');
            // console.log('id ', id)
            var todo = new app.views.TodoView().finishEdit($(this), id);
            // $('.edit-todo').prev().html(todo.text);
            console.log('finish edit ', todo)
            self.editTodo(todo);
        });
      break;
      case 'deleteTodo':
      $('.display').on('click','.delete-todo', function(e) {
        // var index = self.todos.indexOf(todo);
        // self.todos.splice(index, 1);
        // this.todos.splice(this.todos.indexOf(todo), 1);
        $(this).closest('li').remove();
      });
      $();
        default:
        break;
    }
} 
  onLoad = function() {
    console.log('get LocalStorage ', JSON.parse(localStorage.getItem('todoList')));
    app.todoList = new app.models.TodoList();
    var todosLocal = localStorage.getItem('todoList');
    if(todosLocal) {
        app.todoList.todos = JSON.parse(todosLocal).todos;
        app.todoList.todos.forEach(function (todo) {
          var labelTodo = '<li class="view" data-id=' + todo.id + '>' + 
                            '<input type="checkbox" class="tonggle">' + 
                            '<label class="text-todo">' + todo.text + '</label>' +
                            '<input class="edit-todo" value=' + todo.text + '>' +
                            '<button class="delete-todo">x</button>' +   
                          '</li> ';
          $('.display').prepend(labelTodo);  
          $('.edit-todo').hide();    
        });
    }
  }
