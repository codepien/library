

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return (this.name + " was written by " + this.author + " and has " + this.pages + " pages.")
    }
}

let HarryPotter = new Book("Harry Potter", "J.K. Rowling", 223);
 
console.log(HarryPotter.info());