#ifndef USER_H
#define USER_H

#include <string>

#include "Movie.h"
using namespace std;

class User {
protected:
    int id;
    string name;
    string email;
    string password;
    int age;
    bool isAdmin;
public:
    int getId() const { return id; }
    string getName() const { return name; }
    string getEmail() const { return email; }
    string getPassword() const { return password; }
    int getAge() const { return age; }
    bool getIsAdmin() const { return isAdmin; }
    static int nextId;
    User(string e, string n, string p, int age);
    vector<Movie> listMovies();
    virtual void displayRole() = 0;
    int getId() {return id ;}
};

#endif
