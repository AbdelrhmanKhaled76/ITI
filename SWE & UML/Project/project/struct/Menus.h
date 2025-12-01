#ifndef MENUS_H
#define MENUS_H
#include <string>
#include <vector>
#include "Movie.h"
#include "Customer.h"

using namespace std;

extern vector<string> usersMenu;
extern vector<string> authMenu;
extern vector<string> adminsMenu;

// Function declarations
vector<string> preper_Movies_Properties_As_Menue_For_Admin(const vector<Movie>& Movies);
vector<string> preper_Movies_Properties_As_Menue(const vector<Movie>& Movies);
vector<string> preper_Users_As_Menu(const vector<Customer>& customers);
vector<string> preper_Movies_Showtimes_As_Menue(vector<Movie>& Movies, int choice, int& movieId);

#endif // MENUS_H