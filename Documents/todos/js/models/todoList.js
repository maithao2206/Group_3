app.models.TodoList = function() {
  
    this.todos = [];
//     //delete
//     //add
//     //filter
//     //clearComplete
//     //toggleAllTodos
}
// TodoList.prototype.deleteTodo = function(id) {
//     var indexDeleteTodo ="";
//     this.todos.find(function(todo,index) {
//        indexDeleteTodo = index;
//        return todo.id === id;
//     })
//    this.todos.splice(indexDeleteTodo,1);
// }
app.models.TodoList.prototype.addTodo = function(todo) {
    this.todos.push(todo);
} 
// TodoList.prototypee.show = function (todos) {
//     return todos;
// }
// TodoList.prototype.active = function (todos) {
//     return todos.filter(function (todo) {
//     return !todo.completed;
//     })
// }
// TodoList.prototype.completed = function (todos) {
//     return todos.filter(function (todo) {
//     return todo.completed;
//     })
// }


