const Box = function(height, width, length, material, content){
    content = content || [];

    const validate = function(){
        if(typeof height !== "number") throw new TypeError("height must be a number");
        if(typeof width !== "number") throw new TypeError("width must be a number");
        if(typeof length !== "number") throw new TypeError("length must be a number");
        if(typeof material !== "string") throw new TypeError("material must be a string");
        content.forEach(el => { if(!(el instanceof Book)) throw new TypeError("content must contain only books"); });
    };
    validate();

    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = content;
    this.volume = height * width * length;
    this.numOfBooks = this.content.length;

    this.getCount = function(){
        return this.content.length;
    }

    this.addBook = function(title, numOfChapters, author, numOfPages, publisher, numOfCopies){
        const book = new Book(title, numOfChapters, author, numOfPages, publisher, numOfCopies);
        this.content.push(book);
        this.numOfBooks = this.content.length;
    }

    this.deleteBook = function(title){
        const idx = this.content.findIndex(book => book.title === title);
        if(idx === -1) {
            console.log("No book found with that title");
        } else {
            this.content.splice(idx, 1);
            this.numOfBooks = this.content.length;
        }
    }
};

const Book = function(title , numOfChapters, author, numOfPages, publisher, numOfCopies){
    const validate = function(){
        if(typeof title !== "string"){
            throw new TypeError("title must be a string");
        }
        if(typeof numOfChapters !== "number"){
            throw new TypeError("numOfChapters must be a number");
        }
        if(typeof author !== "string"){
            throw new TypeError("author must be a string");
        }
        if(typeof numOfPages !== "number"){
            throw new TypeError("number of pages must be a number");
        }
        if(typeof numOfCopies !== "number"){
            throw new TypeError("number of Copies must be a number");
        }
        if(typeof publisher !== "string"){
            throw new TypeError("publisher must be a string");
        }
    };
    validate();
    this.title = title;
    this.numOfChapters = numOfChapters;
    this.author = author;
    this.numOfPages = numOfPages;
    this.publisher = publisher;
    this.numOfCopies = numOfCopies;
}


const myBox = new Box(10, 5, 2, "wood");

myBox.addBook("JS Basics", 10, "Alice", 200, "TechPub", 2);
myBox.addBook("Python 101", 12, "Bob", 300, "CodePub", 1);

console.log(myBox.getCount()); // 2

myBox.deleteBook("JS Basics");

console.log(myBox.getCount()); // 1
console.log(myBox.content[0].title); // Python 101