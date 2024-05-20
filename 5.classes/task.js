class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
}

    fix() { 
        this.state *= 1.5;
    }

class SortingBooks{
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
    constructor(name, releaseDate, pagesCount, state = 100, autor) {
		super(name, releaseDate, pagesCount, state = 100, autor);
		this.type = "book";
        this.autor = autor;
	}
}
class Categories extends Book {
    constructor(NovelBook, FantasticBook, DetectiveBook ) {
		super(NovelBook, FantasticBook, DetectiveBook);
		this.type = "novel", "fantastic", "detective";
    }
}

// Второе задание

class Library{
    constructor(name){
    books = [];
    this.name = name;
    this.books = [];
}

 addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {                         
    return this.books.filter(o => o[key] === value)
  }     
}   