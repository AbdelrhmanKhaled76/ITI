#include <iostream>
#include <string>
#include <array>
#include <termios.h>  // for getch replacement
#include <unistd.h>   // for read()
#include <cstdlib>    // for system("clear")
#include <limits>     // for numeric_limits
#include <memory>     // for unique_ptr

using namespace std;

// Replacement for _getch() on Linux
int getch() {
    termios oldt, newt;
    int ch;
    tcgetattr(STDIN_FILENO, &oldt);
    newt = oldt;
    newt.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
    ch = getchar();
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
    return ch;
}

// ===== CHANGED struct → class =====
class Employee {
public:
    int id = 0;
    string name;
    int age;
    double salary;
};

// Global variables
int emp_number = 0;
unique_ptr<Employee[]> employees;

// Function prototypes
void printMenu(int);
void addEmployee();
void displayEmployee();
void displayAll();
void getKey(int&, bool&);

// ===== MAIN FUNCTION =====
int main() {
    int choice = 0;
    bool running = true;

    cout << "Enter the number of employees to store: ";
    while (!(cin >> emp_number) || emp_number <= 0) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        cout << "Invalid input. Enter a positive number: ";
    }
    cin.ignore(numeric_limits<streamsize>::max(), '\n'); // flush newline

    // Allocate employees
    employees = make_unique<Employee[]>(emp_number);

    while (running) {
        printMenu(choice);  // system("clear") moved inside this function
        getKey(choice, running);
    }

    cout << "\nExiting program... Goodbye!\n";
    return 0;
}

// ===== MENU PRINT FUNCTION =====
void printMenu(int choice) {
    system("clear"); // clear screen only when printing the menu

    string menuItems[4] = { "New", "Display", "Display All", "Exit" };

    cout << "=== Employee Management System ===\n\n";
    for (int i = 0; i < 4; i++) {
        if (i == choice)
            cout << "\033[31m>> " << menuItems[i] << " <<" << "\033[0m\n";
        else
            cout << "   " << menuItems[i] << "\n";
    }
}

// ===== MENU KEY HANDLER =====
void getKey(int& choice, bool& running) {
    int key = getch();

    if (key == 27) { // possible ESC or arrow key
        key = getch();
        if (key == 91) { // Arrow key prefix
            key = getch();
            if (key == 'A' && choice > 0) choice--;       // Up
            else if (key == 'B' && choice < 3) choice++;  // Down
        } else {
            running = false; // ESC pressed
        }
    }
    else if (key == 10) { // ENTER key
        system("clear");
        switch (choice) {
            case 0: addEmployee(); break;
            case 1: displayEmployee(); break;
            case 2: displayAll(); break;
            case 3: running = false; break;
        }

        if (running) {
            cout << "\nPress any key to return to the menu...";
            getch();
        }
    }
}

// ===== ADD EMPLOYEE =====
void addEmployee() {
    int id = 0;
    int age = 0;
    double salary = 0.0;
    string name;

    system("clear");

    // Header
    cout << "\033[1;1H=== Add New Employee ===";
    cout << "\033[2;1H(Press ENTER after each field)\n";

    // Draw labels (aligned by rows)
    cout << "\033[4;3HID:";
    cout << "\033[5;3HName:";
    cout << "\033[6;3HAge:";
    cout << "\033[7;3HSalary:";

    // Move cursor to positions for user input
    cout << "\033[4;15H";
    if (!(cin >> id)) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        cout << "\033[9;1H\033[31mError: Invalid ID input\033[0m\n";
        return;
    }
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    if (id <= 0) {
        cout << "\033[9;1HError: Invalid ID " << endl;
        return;
    }

    // Check if ID exists (indexed loop)
    for (int i = 0; i < emp_number; ++i) {
        if (employees[i].id == id) {
            cout << "\033[9;1H\033[31mError: Employee with ID " << id << " already exists!\033[0m\n";
            return;
        }
    }

    cout << "\033[5;15H";
    if (!getline(cin, name) || name.empty()) {
        cout << "\033[9;1H\033[31mError: Invalid name\033[0m\n";
        return;
    }

    cout << "\033[6;15H";
    if (!(cin >> age)) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        cout << "\033[9;1H\033[31mError: Invalid age\033[0m\n";
        return;
    }
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    cout << "\033[7;15H";
    if (!(cin >> salary)) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        cout << "\033[9;1H\033[31mError: Invalid salary\033[0m\n";
        return;
    }
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    // Save employee (indexed loop)
    for (int i = 0; i < emp_number; ++i) {
        if (employees[i].id == 0) {
            employees[i].id = id;
            employees[i].name = name;
            employees[i].age = age;
            employees[i].salary = salary;
            cout << "\033[9;1H\033[32mEmployee added successfully!\033[0m\n";
            return;
        }
    }

    cout << "\033[9;1HError: Employee list is full!\n";
}

// ===== DISPLAY SINGLE EMPLOYEE =====
void displayEmployee() {
    int id = 0;

    cout << "\033[1;1H=== Display Employee ===";
    cout << "\033[3;3HEnter employee ID: ";

    if (!(cin >> id)) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        cout << "\033[5;3H\033[31mError: Invalid ID!\033[0m\n";
        return;
    }
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    if (id <= 0) {
        cout << "\033[5;3H\033[31mError: Invalid ID!\033[0m\n";
        return;
    }

    // Find the employee (indexed loop)
    for (int i = 0; i < emp_number; ++i) {
        if (employees[i].id == id) {
            cout << "\033[5;1H==============================";
            cout << "\033[6;3H\033[32mEmployee Details:\033[0m";
            cout << "\033[8;3HID: " << employees[i].id;
            cout << "\033[9;3HName: " << employees[i].name;
            cout << "\033[10;3HAge: " << employees[i].age;
            cout << "\033[11;3HSalary: " << employees[i].salary;
            cout << "\033[13;1H==============================\n";
            return;
        }
    }

    cout << "\033[5;3H\033[31mNo employee found with ID " << id << ".\033[0m\n";
}

// ===== DISPLAY ALL EMPLOYEES =====
void displayAll() {
    cout << "=== All Employees ===\n\n";
    bool found = false;

    for (int i = 0; i < emp_number; ++i) {
        if (employees[i].id != 0) {
            found = true;
            cout << "ID: " << employees[i].id
                 << " | Name: " << employees[i].name
                 << " | Age: " << employees[i].age
                 << " | Salary: " << employees[i].salary << "\n";
        }
    }

    if (!found)
        cout << "No employees found.\n";
}
