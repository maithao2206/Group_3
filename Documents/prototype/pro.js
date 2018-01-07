var Student = function (name, className) {
    this.id = new Date().valueOf();
    this.name = name;
    this.classname = className;
    this.friends = [];
}
Student.prototype.getName = function() {
    return this.name;
}
Student.prototype.setName = function(set) {
    this.name = set;
}
Student.prototype.setFriends = function(friends) {
    this.friends = friends;
}
Student.prototype.hasDuplidcateFriendMyName = function() {
    console.log('this.friends', this.friends);
    var self = this;
    console.log('this outside', this);
    var dupName = this.friends.find(function(f) {
        console.log('this.name ', self.name);
        console.log('this inside', this);
        return f === self.name;
    });
    console.log('dupName ', dupName)
    return (dupName) ? true : false;
}
Student.prototype.inseartFriendByIndex = function(name, index) {
    this.friends.splice(index, 0, name) // 1, 1, 'test'
    // Student.friends.push();
}
var student = new Student("Thao");
console.log(student.getName());
student.setName("Chip");
console.log(student.getName());
var insal = ['Hoai', 'Trang','Chip'];
student.setFriends(insal);
console.log(student.friends);
console.log(student.hasDuplidcateFriendMyName());
student.inseartFriendByIndex("Tien", 1);
console.log(student.friends);

//call, apply, bind
//bind tao ra function moi sau do thuc thi
//call, apply thu cthi function
var sum = function(a, b, c) {
    return a + b + c;
}
console.log("sum call",sum.call(this, 6, 9));
console.log("sum apply",sum.apply(this, [6, 9, 3]));
var sumBind = sum.bind(null, 7,8,9);
console.log("sum bind", sumBind());