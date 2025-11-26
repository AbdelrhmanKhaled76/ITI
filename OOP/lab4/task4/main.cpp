#include <iostream>
#include <string>
#include <array>
#include <conio.h>

using namespace std;

struct Employee {
    int id = 0;
    string name;
    int age;
    double salary;
};

constexpr int MAX_EMPLOYEES = 100;
array<Employee, MAX_EMPLOYEES> employees;

// Function prototypes
void printMenu(int);
void addEmployee();
void displayEmployee();
void displayAll();
void getKey(int &, bool &);

int main() {
    int choice = 0;
    bool running = true;

    while (running) {
        system("cls");

        printMenu(choice);

        getKey(choice, running);
    }

    cout << "\nExiting program... Goodbye!\n";
    return 0;
}


void printMenu(int choice) {
    string menuItems[4] = { "New", "Display", "Display All", "Exit" };

    cout << "=== Employee Management System ===\n\n";
    for (int i = 0; i < 4; i++) {
        if (i == choice)
            cout << "\033[31m" << ">> " << menuItems[i] << " <<" << "\033[0m\n";
        else
            cout << "   " << menuItems[i] << "\n";
    }
}

void getKey(int& choice, bool& running) {
    int key = _getch();

    if (key == 224) { // arrow keys
        key = _getch();
        if (key == 72 && choice > 0) choice--;      // Up
        else if (key == 80 && choice < 3) choice++; // Down
    }
    else if (key == 27) { // ESC
        running = false;
    }
    else if (key == 13) { // ENTER
        system("cls");
        switch (choice) {
        case 0: addEmployee(); break;
        case 1: displayEmployee(); break;
        case 2: displayAll(); break;
        case 3: running = false; break;
        }

        if (running) {
            cout << "\nPress any key to return to the menu...";
            _getch();
        }
    }
}

void addEmployee() {
    int id, age;
    double salary;
    string name;

    system("cls");

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
    cin >> id;

    // check if the id is invalid
    if (id <= 0) {
        cout << "\033[9;1HError: Invalid ID " << endl;
        return;
    }

    // Check if ID exists
    for (const auto emp : employees) {
        if (emp.id == id) {
            cout << "\033[9;1HError: Employee with ID " << id << " already exists!\n";
            return;
        }
    }

    cout << "\033[5;15H";
    cin.ignore();
    getline(cin, name);

    cout << "\033[6;15H";
    cin >> age;

    cout << "\033[7;15H";
    cin >> salary;

    // Save employee
    for (auto& emp : employees) {
        if (emp.id == 0) {
            emp.id = id;
            emp.name = name;
            emp.age = age;
            emp.salary = salary;
            cout << "\033[9;1HEmployee added successfully!\n";
            return;
        }
    }

    cout << "\033[9;1HError: Employee list is full!\n";
}

void displayEmployee() {
    int id;
    cout << "Enter employee ID: ";
    cin >> id;

    // check if the id is invalid
    if (id <= 0) {
        cout << "\033[9;1HError: Invalid ID " << endl;
        return;
    }

    for (const auto& emp : employees) {
        if (emp.id == id) {
            cout << "\n=== Employee Details ===\n";
            cout << "ID: " << emp.id << "\n";
            cout << "Name: " << emp.name << "\n";
            cout << "Age: " << emp.age << "\n";
            cout << "Salary: " << emp.salary << "\n";
            return;
        }
    }

    cout << "\nNo employee found with ID " << id << ".\n";
}

void displayAll() {
    cout << "=== All Employees ===\n\n";
    bool found = false;

    for (const auto& emp : employees) {
        if (emp.id != 0) {
            found = true;
            cout << "ID: " << emp.id
                << " | Name: " << emp.name
                << " | Age: " << emp.age
                << " | Salary: " << emp.salary << "\n";
        }
    }

    if (!found)
        cout << "No employees found.\n";
}

