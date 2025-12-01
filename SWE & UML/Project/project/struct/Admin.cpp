

//
// Created by Lenovo on 11/26/2025.
//

#include "Admin.h"

#include <iostream>
#include <ostream>
#include "globals.h"


Admin::Admin(string email,string name,string password,int age ): User(email, name, password, age) {
    isAdmin=true;
    id = -100;
}

void Admin::displayRole() {
    cout<<"Admin"<<endl;
}
void Admin::addMovie(Movie movie) {
    movies.push_back(movie);
    cout << "Movie \"" << movie.getTitle() << "\" added successfully.\n";
}

void Admin::removeMovie(int id) {
    bool found = false;
    for (auto it = movies.begin(); it != movies.end(); ++it) {
        if (it->getId() == id) {
            cout << "Removing movie: " << it->getTitle() << endl;
            movies.erase(it);
            found = true;
            break;
        }
    }
    if (!found) {
        cout << "Movie with ID " << id << " not found.\n";
    }
}
vector<Customer> Admin::listCustomers() {

    for (auto &u : Customers) {
        cout << "\033[33m\033[3mID #"
             << u.getId()
             << "\033[0m : ";
        u.getName();
    }
    return ::Customers;
}






