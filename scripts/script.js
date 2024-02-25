const bookContainer = document.querySelector('.book-container');
console.log(bookContainer)
const newBookButton = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const bookName = dialog.querySelector('#book-name')
let newBookName = '';
const bookAuthor = dialog.querySelector("#book-author");
let newBookAuthor = '';
const bookPages = dialog.querySelector("#book-pages");
let newBookPages = 0;
const bookRead = dialog.querySelector("#book-read");
let newBookRead = false;

const submitButton = dialog.querySelector('#form-submit');
const closeButton = dialog.querySelector('#form-close');
const myLibrary = [];

newBookButton.addEventListener('click', () => {
    dialog.showModal();
})
bookName.addEventListener('change', (e) => {
    newBookName = bookName.value;
})
bookAuthor.addEventListener("change", (e) => {
	newBookAuthor = bookAuthor.value;
});
bookPages.addEventListener("change", (e) => {
	newBookPages = bookPages.value;
});
bookRead.addEventListener("change", (e) => {
	newBookRead = bookRead.value;
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
})
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    //do stuff here
    newBook = new Book(newBookName, newBookAuthor, newBookPages, newBookRead);
    myLibrary.push(newBook);
    displayBooks();
    dialog.close();
})
dialog.addEventListener('close', (e) => {
    console.log(e);
})

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
    //needs change
    bookContainer.childNodes.forEach(child => {
        bookContainer.removeChild(child);
    });
    myLibrary.forEach(book => {
        bookContainer.appendChild(createBookElement(book));
    });
}

let book1 = new Book("booba", "troopa", 3, false);
let book2 = new Book("klopa", "stroopa", 5, true);

addBookToLibrary(book1);
addBookToLibrary(book2);

displayBooks();
