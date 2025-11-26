#include <iostream>
#include <string>
using namespace std;

struct Employee {
    int id;
    string name;
    int age;
    double salary;
};

int main() {
    int n;
    cout << "Enter number of employees: ";
    cin >> n;
    cin.ignore(); // clear newline

    Employee employees[n];

    for (int i = 0; i < n; ++i) {
        // Clear screen and reset cursor
        cout << "\033[2J\033[H";

        cout << "=== Employee Form (" << i + 1 << " of " << n << ") ===\n\n";
        cout << "\033[3;2H" << "ID: \n";
        cout << "\033[3;14H"  << "Name:  \n";
        cout << "\033[5;2H"  << "Age:  \n";
        cout << "\033[5;14H" << "Salary:  \n";
        cout.flush();

        // Move cursor using ANSI escape codes
        cout << "\033[3;8H";  // Move to row 3, column 7 (after "ID:")
        cin >> employees[i].id;
        cin.ignore();

        cout << "\033[3;20H";  // After "Name:"
        getline(cin, employees[i].name);

        cout << "\033[5;8H";  // After "Age:"
        cin >> employees[i].age;
        cin.ignore();

        cout << "\033[5;24H"; // After "Salary:"
        cin >> employees[i].salary;
        cin.ignore();

        cout << "\n\nPress Enter to continue...";
        cin.get();
    }

    // Display all employees
    cout << "\033[2J\033[H";

    cout << "=== Employee Details ===\n\n";
    for (auto emp : employees) {
        cout << "ID: " << emp.id
             << ", Name: " << emp.name
             << ", Age: " << emp.age
             << ", Salary: " << emp.salary << "\n";
    }

    cout << "\nAll data displayed successfully!\n";
    return 0;
}
