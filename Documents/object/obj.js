var animal = {
    id: new Date().valueOf(),
    name: 'nali',
    born: 2005,
    getAge: function(currentYear) {
       var  age = currentYear - this.born;
       console.log('huong duong: dong phung lap'+age)
    //    return age;
    }
}
animal.getAge(2017)
var cats = {
    cats: [animal],
    addCat: function(newCat) {
        this.cats.push(newCat);
        return newArrCat;
    },
    findCatByName: function (name) {
        
        return cat;
    }
}