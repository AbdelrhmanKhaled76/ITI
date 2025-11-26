//static way
#include <iostream>
#include <vector>
#include <string>
using namespace std;

// ========================
// Author Class
// ========================
class Author {
private:
    string name, nationality;

public:
    Author(string n = "", string nat = "") : name(n), nationality(nat) {}
    
    string getName() const { return name; }
    string getNationality() const { return nationality; }
};

// ========================
// Book Class
// ========================
class Book {
private:
    string title, year;
    Author author; // <-- direct object, no pointer

public:
    Book(string t = "", string y = "", string n = "", string nat = "")
        : title(t), year(y), author(n, nat) {}

    string getTitle() const { return title; }
    const Author& getAuthor() const { return author; }

    void print() const {
        cout << "Book title: " << title
             << ", Author: " << author.getName()
             << ", Nationality: " << author.getNationality()
             << ", Year: " << year << endl;
    }
};

// ========================
// Library Class
// ========================
class Library {
private:
    vector<Book> books; // <-- vector of objects

public:
    Library() {}

    Library(string t, string y, string n, string nat) {
        books.push_back(Book(t, y, n, nat));
    }

    void addBook(string t, string y, string n, string nat) {
        books.push_back(Book(t, y, n, nat));
    }

    void print() const {
        for (const auto& b : books)
            b.print();
    }

    const vector<Book>& getBooks() const { return books; }
};

// ========================
// Member Class
// ========================
class Member {
private:
    string name;
    int id;
    const Library& library; // <-- reference to Library
    vector<const Book*> borrowedBooks; // pointers just for tracking borrowed books

public:
    Member(string n, int i, const Library& lib) : name(n), id(i), library(lib) {}

    void listBooks() const {
        cout << "Member " << name << " can see these books:\n";
        for (const auto& b : library.getBooks()) {
            cout << "- " << b.getTitle()
                 << " by " << b.getAuthor().getName() << endl;
        }
    }

    void borrowBook(const string& title) {
        for (const auto& b : library.getBooks()) {
            if (b.getTitle() == title) {
                borrowedBooks.push_back(&b);
                cout << name << " borrowed \"" << title << "\"\n";
                return;
            }
        }
        cout << "Book \"" << title << "\" not found in the library.\n";
    }

    void listBorrowedBooks() const {
        cout << name << " has borrowed:\n";
        if (borrowedBooks.empty()) {
            cout << "No books borrowed.\n";
            return;
        }
        for (auto b : borrowedBooks) {
            cout << "- " << b->getTitle() << " by " << b->getAuthor().getName() << endl;
        }
    }

    int getId() const { return id; }
};

// ========================
// MAIN
// ========================
int main() {
    // ===== Static objects (stack) =====
    Library lib1("C++", "2020", "Stroustrup", "Danish");
    lib1.addBook("Java", "2015", "James", "American");
    lib1.addBook("Python", "2018", "Van Rossum", "Dutch");

    cout << "Library 1:\n";
    lib1.print();

    Member m1("Alice", 101, lib1); // Static member
    m1.listBooks();

    m1.borrowBook("Java");
    m1.borrowBook("Python");
    m1.borrowBook("Ruby");

    cout << "\nBorrowed books:\n";
    m1.listBorrowedBooks();

    return 0;
}





// dynamic way

#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Author {
private:
    string name, nationality;

public:
    Author(string n, string nat) : name(n), nationality(nat) {}
    Author(const Author& other) : name(other.name), nationality(other.nationality) {}
    Author& operator=(const Author& other) {
        if (this != &other) {
            name = other.name;
            nationality = other.nationality;
        }
        return *this;
    }

    string getName() const { return name; }
    string getNationality() const { return nationality; }
};

class Book {
private:
    string title, year;
    Author* author;

public:
    Book(string t, string y, string name, string nationality)
        : title(t), year(y), author(new Author(name, nationality)) {}

    Book(const Book& other) {
        title = other.title;
        year = other.year;
        author = new Author(*other.author);
    }

    Book& operator=(const Book& other) {
        if (this != &other) {
            title = other.title;
            year = other.year;
            delete author;
            author = new Author(*other.author);
        }
        return *this;
    }

    ~Book() {
        delete author;
    }

    string getTitle() const { return title; }
    Author* getAuthor() const { return author; }

    void print() const {
        cout << "Book title: " << title
             << ", Author: " << author->getName()
             << ", Nationality: " << author->getNationality()
             << ", Year: " << year << endl;
    }
};

class Library {
private:
    vector<Book*> books;

public:
    Library() {}
    Library(string t, string y, string n, string nat) {
        books.push_back(new Book(t, y, n, nat));
    }

    Library(const Library &other) {
        for (auto b : other.books)
            books.push_back(new Book(*b));
    }

    Library& operator=(const Library& other) {
        if (this != &other) {
            for (auto b : books) delete b;
            books.clear();
            for (auto b : other.books)
                books.push_back(new Book(*b));
        }
        return *this;
    }

    ~Library() {
        for (auto b : books) delete b;
    }

    void addBook(string t, string y, string n, string nat) {
        books.push_back(new Book(t, y, n, nat));
    }

    void print() const {
        for (auto b : books)
            b->print();
    }

    const vector<Book*>& getBooks() const { return books; }
};

class Member {
private:
    string name;
    int id;
    const Library* library;
    vector<Book*> borrowedBooks;

public:
    Member(string n, int i, const Library* lib) : name(n), id(i), library(lib) {}

    void listBooks() const {
        cout << "Member " << name << " can see these books:\n";
        for (auto b : library->getBooks()) {
            cout << "- " << b->getTitle()
                 << " by " << b->getAuthor()->getName() << endl;
        }
    }

    void borrowBook(const string& title) {
        for (auto b : library->getBooks()) {
            if (b->getTitle() == title) {
                borrowedBooks.push_back(b);
                cout << name << " borrowed \"" << title << "\"\n";
                return;
            }
        }
        cout << "Book \"" << title << "\" not found in the library.\n";
    }

    void listBorrowedBooks() const {
        cout << name << " has borrowed:\n";
        for (auto b : borrowedBooks) {
            cout << "- " << b->getTitle() << " by " << b->getAuthor()->getName() << endl;
        }
        if (borrowedBooks.empty()) cout << "No books borrowed.\n";
    }

    int getId() const { return id; }
};

int main() {
    // ===== Static objects (on stack) =====
    Library lib1("C++", "2020", "Stroustrup", "Danish");
    lib1.addBook("Java", "2015", "James", "American");
    lib1.addBook("Python", "2018", "Van Rossum", "Dutch");

    cout << "Library 1:\n";
    lib1.print();

    Member m1("Alice", 101, &lib1); // Static member
    m1.listBooks();

    m1.borrowBook("Java");
    m1.borrowBook("Python");
    m1.borrowBook("Ruby");

    cout << "\nBorrowed books:\n";
    m1.listBorrowedBooks();


    return 0;
}


