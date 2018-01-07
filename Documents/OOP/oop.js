var Author = function (name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
};
var Book = function (title, author, price, quantity, isRead, releaseDate) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
    this.isRead = isRead;
    this.releaseDate = releaseDate;
    // this.releaseDate = function(date) {
    //     var getTwoNumber = function (number) {
    //         return number < 10 ? '0' + number : number;
    //      }
    //     var formatDate = function (mdate) { 
    //         var  month = getTwoNumber(mdate.getMonth() + 1),
    //              date = getTwoNumber(mdate.getDate()),
    //              year = mdate.getFullYear();
    //         return  {
    //             date: month +'/' + date + '/' + year,
    //         }
    //     }
    // }

};
var BookShelve = function (books) {
    this.books = books;//3
    this.searchBooksByAuthorName = function (author) {
        return this.books.filter(function(Book) {
            console.log(book)
            return Book.author.author === author;//condition
        })
    }//filter=> array[book]
    //find=>object(type)Book
    this.updateSatusBook = function (emailAuthor, title) {
        var numOfBooks = this.books.length;
        for (var i =0;i < numOfBooks; i++) {
            if(this.books[i].author.email === emailAuthor && this.books[i].title)
            this.books[i].isRead = true;
        }

      
    
        // var Book = {
        //     id: 0,
        //     name: 'HoaiTyTy',
        //     title: 'INSAL',
        //     emailAuthor:'thaoptm2206@gmail.com',
        //   };
        //   //Lời chào tới Book
        //   function updateSatusBook() {
        //     Book.updateSatusBook = 'Hello, ' + Book.title + ' ' + Book.emailAuthor + '!';
        //   }
        //   updateSatusBook();
        //   Object.observe(Book, function(changes) {
        //     changes.forEach(function(change) {
        //       // Bất kỳ khi nào emailAuthor hoặc danh hiệu thay đổi, gọi updateSatusBook()
        //       if (change.emailAuthor === 'emailAuthor' || change.title === 'title') {
        //         updateSatusBook();
        //       }
        //     });
        //   });
            
    }
    this.updatePrice = function () {
         var readBooks = this.books.filter(function(book) {
             return book.isRead;
         })
    }
    this.findCheapestBook = function () {

    }
    //apply chi su dung trong array
    this.findDateBestBooksSale = function () {

    }

};
var chip = new Author ("Doremon", "thaoptm2206", "female");
var chip = new Author ("Pokemon", "thaoptm2206", "male");
var book1 = new Book("insal",Author,25000,25,true,new Date("20/11/2017"));
console.log(chip);
console.log(book);
var list = new book(author.Doremon);
console.log(this.searchBooksByAuthorName);


