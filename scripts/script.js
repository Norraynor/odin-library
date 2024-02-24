const bookContainer = document.querySelector('.book-container');
console.log(bookContainer)

const myLibrary = [];


function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${
			read ? "already read" : "not read yet"
		}`;
	};
}
//let book = new Book("booba", "troopa", 3, false);
//console.log(book.info());

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookElement(book) {
    let newBook = document.createElement('div');
    newBook.classList.add('book');
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = book.title;
    let author = document.createElement('div');
    author.classList.add("author");
    author.textContent = "by " + book.author;
    let pages = document.createElement('div');
    pages.classList.add("pages");
    pages.textContent = "pages: " + book.pages;
    let read = document.createElement('div');
    read.classList.add("read");
    if (book.read) {
        read.textContent = 'you\'ve read this book';
    } else {
        read.textContent = "not read yet";        
    }
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(read);
    return newBook;
}
function displayBooks() {
    myLibrary.forEach(book => {
        bookContainer.appendChild(createBookElement(book));
    });
}

let book1 = new Book("booba", "troopa", 3, false);
let book2 = new Book("klopa", "stroopa", 5, true);

addBookToLibrary(book1);
addBookToLibrary(book2);

displayBooks();
