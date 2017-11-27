var Circle = function(x, y , radius) {
    this.radius = radius;
    this.heartCircle = {x,y};
}
Circle.prototype.diameterOfACircle = function() {
    return 2*3.14*this.radius;
}
Circle.prototype.relativePositionOfTwoCircle = function(c) {
    var subRadius = Math.abs(this.radius - c.radius);
        sumRadius = this.radius + c.radius;
        d = Math.sqrt(Math.pow(this.heartCircle.x + c.heartCircle.x, 2)+ Math.pow(this.heartCircle.y + c.heartCircle.y, 2));
    if(subRadius < d && d < sumRadius ) 
    console.log("\nGiao nhau");
    if(d === subRadius)
    console.log("\nTiep xuc trong");
    if(d === sumRadius)
    console.log("\nTiep xuc ngoai");
    if(d < subRadius)
    console.log("\nLong nhau");
    if(d > sumRadius)
    console.log("\nNam ngoai nhau");
}
var c1 = new Circle(4,3,3);
var c2 = new Circle(2,5,7);
console.log('c1: ', c1);
console.log('c2: ', c2);
console.log('chu vi c1: ',c1.diameterOfACircle());
console.log('chu vi c2: ',c2.diameterOfACircle());
console.log('vi tri tuong doi: ',c1.relativePositionOfTwoCircle(c2));
