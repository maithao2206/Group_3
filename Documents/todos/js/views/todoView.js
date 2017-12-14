app.views.TodoView = function() {
    // this.ENTER = 13;
    var self = this;
    // self.todo = new todo();
    self.handleEvent ('editTodo', self.editTodo);
    // self.editTodo = this.handleEvent('editTodo', self.duplicateTodo)
}
app.views.TodoView.prototype.getCurrentTodo = function(self) {
  // get value from input
  var text = self.children('.text-todo').html();
  var id = self.data('id');
  // var isCompleted = checked;
  var currentTodo = new app.models.Todo(text, id);
  // currentTodo.isCompleted = isCompleted;
  return currentTodo;
}

app.views.TodoView.prototype.editTodo= function(self, currentTodo) {
  self.children('.text-todo').hide();
  self.children('.check-todo').hide();
  self.children('.delete-todo').hide();
  self.children('.edit-todo').show();

  var currentTodo = this.getCurrentTodo(self);
  self.children('.edit-todo').val(currentTodo.text);

}
app.views.TodoView.prototype.deleteTodo = function() {
  self.children('.text-todo').show();
  self.children('.check-todo').show();
  self.children('.delete-todo').show();
}

app.views.TodoView.prototype.finishEdit = function(self, id) {
  self.next('.text-todo').html(self.val()).show();
  self.prev('.check-todo').show();
  self.next('.delete-todo').hide();
  self.hide();
  return new app.models.Todo(self.val(), id);
}
// TodoView.prototype.renderTodo = function() {
// }
app.views.TodoView.prototype.handleEvent = function(event, handler) {
  var self = this;
  switch (event) {
    case 'editTodo':
      var currentTodo = '';
      $('.display').on('dblclick', 'li', function(e) {
        currentTodo = self.getCurrentTodo($(this));
        self.editTodo($(this), currentTodo);
      });
      // $('.display').on('focusout', '.edit-todo', function(e) {
      //   // self.finishEdit($(this), currentTodo.id);
      //   var todo = new app.views.TodoView().finishEdit($(this));
      //   // app.
      //   // handler(todo);
      //   // self.editTodo($(this));
      // });
      case 'deleteTodo':
      $('li').hover( function() {
        
      });
      $('.display').on('click', 'button', function(e) {
        var index = self.todos.indexOf(todo);
        self.todos.splice(index, 1);
      });
      break;
    case '':
      $()
    default:

  }

}