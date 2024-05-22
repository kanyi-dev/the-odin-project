function Book(title, author, pages, read){
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.title = title;
    this.info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read} `);
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');

theHobbit.info();