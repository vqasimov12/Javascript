const book = {
    title: "title",
    author: "author",
    isAviable: true,
  };
  
  const book1 = {
    title: "Mysterious Island",
    author: "Jules Verne",
  };
  
  const book2 = {
    title: "Misérables",
    author: "Victor Hugo",
    isAviable: false,
  };
  
  const book3 = {
    title: "The Three Musketeers",
    author: "Alexandre Dumas",
    isAviable: true,
  };
  
  book1.__proto__ = book;
  book2.__proto__ = book;
  book3.__proto__ = book;
  
  function borrow() {
    if (this.isAviable) {
      console.log(`${this.title} is borrowed`);
      this.isAviable = false;
    } else {
      console.log(`${this.title} is not available`);
    }
  }
  
  function returnBook() {
    this.isAviable = true;
    console.log(`${this.title} is returned`);
  }
  
  function info() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nisAviable: ${this.isAviable}`);
  }
  
  const bookDetails = info.bind(book1);
  const borrowBook = borrow.bind(book1);
  
  bookDetails(); 
  borrowBook();
  borrowBook();
  bookDetails();
  returnBook.apply(book1);
  bookDetails();
  