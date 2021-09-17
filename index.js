let library = [];
let displayLibrary = [];

let inputTitle = document.querySelector("#inputTitle");

let inputAuthor = document.querySelector("#inputAuthor");

let inputPages = document.querySelector("#inputPages");

function Book(_title, _author, _pages) {
    this.title = _title
    this.author = _author
    this.pages = _pages
    this.info = function() {
        return (this.title + " is written by " + this.author + " and has " + this.pages + " pages.")
    }
}

 function addToLibrary(_title, _author, _pages) {
     let newBook = new Book(_title, _author, _pages);
     library.push(newBook);
 }

let addButton = document.querySelector("#addButton");
addButton.onclick = function(e) {
    e.preventDefault();
    addToLibrary(inputTitle.value, inputAuthor.value, inputPages.value);

    for(let i = 0; i < displayLibrary.length; i++) {
        let list = document.querySelector("#bookList");
        let clearItem = list.getElementsByTagName("li");
        list.removeChild(clearItem[0]);
    }
    
    displayLibrary.length = 0;


    for(i=0; i< library.length; i++) {
        displayLibrary.push(library[i]);
    }

    

    for(i=0; i< displayLibrary.length; i++) {
        let listItem = document.createElement("li");
        let book = displayLibrary[i];
        let txt = document.createTextNode(book.info());
        listItem.appendChild(txt);
        let list = document.querySelector("#bookList");
        list.appendChild(listItem);
    }
}

