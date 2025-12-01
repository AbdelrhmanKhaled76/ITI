
#include "User.h"
#include <iostream>

#include "globals.h"

using namespace std;

int User::nextId = 1;

User::User(string email, string name, string password, int age) {
    this->id = nextId++;
	this->age = age;
	this->email = email;
	this->name = name;
	this->password = password;
	this->isAdmin = false;
}

vector<Movie> User::listMovies() {
	cout << "\033[34mListing of movies...\033[0m\n"; // Blue text

	// for (int i = 0; i < movies.size(); i++) {

	// 	cout << "\033[33m"
	// 		 << "\033[3m"
	// 		 << "Movie #"
	// 		 << movies[i].getId()
	// 		 << "\033[0m"
	// 		 << " : "
	// 		 << movies[i].getTitle()
	// 		 << "\033[0m"
	// 		 << endl;
	// }
	return movies;
}




