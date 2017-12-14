app.models.Todo = function(text, id) {
    this.id = id || new Date().valueOf();
    this.text = text;
    this.isComplete = false;
}
app.models.Todo.prototype.edit = function(text) {
    this.text = text;
}
