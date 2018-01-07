var Author = function (name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
}
var Book = function (title, author, price, quantity, isRead, releaseDay) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
    this.isRead = isRead;
    this.releaseDay = new Date (releaseDay);
}
var BookShelve = function (book) {
    this.books = [book],
    
    this.getIdByName = function (name) {
        var numOfBook = this.books.length;
        for (var i = 0; i <numOfBook; i++) {
            if (this.books[i]['title'] === name) return i;
            //return (this.books[i]['title'] === name) ? i : (-1);
        }
    },
    this.searchBookByAuthorName = function (name) {
        var booksOfAuthor = [],
            numOfBook = this.books.length;
        for (var i = 0; i <numOfBook; i++) {
            if (this.books[i]['author']['name'] === name) booksOfAuthor.push(this.books[i]);
        }
        return booksOfAuthor;

    },
    this.updateStatusBook = function (emailAuthor, title) {

    },
    this.deleteBook = function (book) {
        var id = this.getIdByName(book.title);
            numOfBook = this.books.length;
        for (var i = id; i<=numOfBook; i++) {
            this.books[i] = this.books[i+1];
        }
    },
    this.isTruePrice = function(book) {
        return (book.price > 0);
    },
    this.updatePrice = function () {
        var today = new Date().valueOf(),
            tempShelve = this.books,
            numOfBook = this.books.length,
            miliSecOfDay = 1000 * 60 * 60 * 24,
            timeDiff =1, numOfDates =1, 
            reLzDate = 1, 
            currentPrice = 0;;
        for (var i = 0; i < numOfBook; i++) {
            if (this.books[i]['isRead']) {
                reLzDate = this.books[i]['releaseDay'].valueOf();
                currentPrice = this.books[i]['price'];
                timeDiff = today - reLzDate;
                numOfDates = Math.floor(timeDiff/miliSecOfDay);
                for (var j = 1; j <= numOfDates; j++) {
                    currentPrice -= currentPrice * 0.05;
                }
                this.books[i]['price'] = currentPrice;
            }
        }
        // for (var i = 0; i < numOfBook; i++) {
        // this.books = this.books.filter(this.isTruePrice(this.books[i])); }
    },
    this.findCheapestBook = function () {

    },
    this.findDateBestBooksSale = function () {

    };
}

// set two authors
var phong = new Author ('Ky Phong', 'hii', 'Male');
var nhi = new Author ('Nhi', 'haa', 'Female');
//set first book
var book1 = new Book ("News", phong, 35000, 200, true, "11/20/2017");
//add the one above to firstShelve
var firstShelve = new BookShelve (book1);
//add two books of one author to the current shelve
firstShelve.books.push(new Book("Math", nhi, 100000, 100, true, "11/18/2017"));
firstShelve.books.push(new Book("HTML", nhi, 1000000, 1000, true, "10/28/2017"));


console.log (phong);
console.log (nhi);
console.log (book1);
console.log (firstShelve);
//test this function
console.log (firstShelve.getIdByName("Math"));
//search and display an array contains Nhi's book
console.log (firstShelve.searchBookByAuthorName("Nhi"));
//firstShelve.deleteBook(book1);
firstShelve.updatePrice();
console.log (firstShelve)