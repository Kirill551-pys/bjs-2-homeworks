class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() { 
        this.state *= 1.5;
    }
    set state(newState) { 
        if (newState < 0) { 
            this._state = 0; 
        } else if (newState > 100) { 
            this._state = 100; 
        } else { 
            this._state = newState; 
        } 
    }
    get state(){
        return this._state;
     }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
		super(name, releaseDate, pagesCount, state = 100);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, author) {
		super(name, releaseDate, pagesCount, state = 100, author);
		this.author = author;
        this.type = "book";
	}
}
class NovelBook extends Book {
    constructor(name, releaseYear, pagesCount, author) {
      super(name, releaseYear, pagesCount, author);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(name, releaseYear, pagesCount, author) {
      super(name, releaseYear, pagesCount, author);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(name, releaseYear, pagesCount, author) {
      super(name, releaseYear, pagesCount, author);
      this.type = "detective";
    }
  }

// Второе задание

class Library{
    constructor(name){
    this.name = name;
    this.books = [];
}

 addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}
