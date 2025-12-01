#include <windows.h>
#include <conio.h>
#include <iostream>
#include <iomanip>
#include <vector>
#include "Customer.h"
#include "globals.h"
#include "Admin.h"
#include "usersMeneuFunctions.h"
using namespace std;



bool isEmailUnique(std::string& email);

// Registeration form
void registerForm() {
    system("cls");
    string email, name, password;
    int age;
    cout << "\033[1;34m"; // Blue header
    cout << "+----------------------+----------------------+\n";
    cout << "| Field                | Input                |\n";
    cout << "+----------------------+----------------------+\n";
    cout << "\033[0m"; // Reset color


    // Email
    cout << "| Email                | ";
    cin >> email;
    cout << "+----------------------+----------------------|\n";

    if (!isEmailUnique(email)) {
        cout << "\n\033[1;31mError: Email already exists!\033[0m\n";
        system("pause");
        return; // Stop registration
    }

    // Password
    cout << "| Password             | ";
    cin.ignore();
    cin >> password;
    cout << "+----------------------+----------------------|\n";

    // Name
    cout << "| Name                 | ";
    cin.ignore();
    cin >> name;
    cout << "+----------------------+----------------------|\n";

    // Age
    cout << "| Age                  | ";
    cin.ignore();
    cin >> age;
    cout << "+----------------------+----------------------|\n";

    cout << "\033[1;32mRegistration Complete!\033[0m\n"; // Green success message
    // string email, string name, string password, int age
    Customer customer(email, name, password, age);
    Customers.push_back(customer);
}

// Login form
int loginForm() {

    system("cls");
    string email, password;

    cout << "\033[1;34m"; // Blue header
    cout << "+----------------------+----------------------+\n";
    cout << "| Field                | Input                |\n";
    cout << "+----------------------+----------------------+\n";
    cout << "\033[0m"; // Reset color

    // Email
    cout << "| Email                | ";
    cin >> email;
    cout << "+----------------------+----------------------|\n";

    // Password
    cout << "| Password             | ";
    cin.ignore();
    cin >> password;
    cout << "+----------------------+----------------------|\n";

    // Validate login
    bool found = false;
    int customerID = 100;
    if (admin.getEmail()==email && admin.getPassword()==password) {

        return -100;
    }
    for (auto& customer : Customers) {
        if (customer.getEmail() == email && customer.getPassword() == password) {
            found = true;
            customerID = customer.getId();
            break;
        }
    }

    if (found) {
        cout << "\033[1;32mLogin Successful!\033[0m\n"; // Green success
        
        return customerID /*== index +1 in customers vector so if u need to found the customer by index customerID -1  */ ;
    }
    else {
        cout << "\033[1;31mInvalid email or password!\033[0m\n"; // Red error
        
    }
    return -1000 ;
}

// validating the email uniqueness
bool isEmailUnique(string& email) {
    if (email == "a") return false;
    for (const auto& customer : Customers) {
        if (customer.getEmail() == email) {
            return false;
        }
    }
    return true;
}