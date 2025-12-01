#include <windows.h>
#include <conio.h>
#include <vector>
#include <iostream>
#include "Auth.h"
#include "globals.h"
#include "Menus.h"
#include <iomanip>

using namespace std;


    bool isNumber(const std::string& str) {
    if (str.empty()) return false;
    for (char c : str) {
        if (!isdigit(c)) return false;
    }
    return true;
}

void setColor(int color) {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), color);
}
// Print the menu with highlight
void printMenu(const vector<string>& menu, int choice) {
        system("cls");
        if (menu.empty()) {
            cout << "Menu is empty!\n";
            cout << "Press any key to return...\n";
            _getch();
            return;
        }

        cout << "\nUse Up/Down arrows to navigate, Enter to select, Esc to exit.\n\n";

        bool lastIsNumber = isNumber(menu.back());
        int size = menu.size();
        if (lastIsNumber) { size -= 1; }

        if (choice >= size) choice = size - 1;
        if (choice < 0) choice = 0;

        for (int i = 0; i < size; i++) {
            if (i == choice)
                cout << "\033[31m" << " >> " << menu[i] << " << " << "\033[0m" << endl;
            else
                cout << " >> " << menu[i] << " << " << endl;
        }
    }


// Handle key press, update choice, and return action
int makeAction(int &choice, int limit,const vector<string>& menu = {}) {
 bool lastIsNumber = isNumber(menu.back());
        int size = menu.size();
        if (lastIsNumber) { limit -= 1; }
    int key = _getch();

    if (key == 27) { //ESC
        return -1;
    }
    else if (key == 224) { // Arrow keys
        key = _getch();
        if (key == 72 && choice > 0) { // Up
            choice--;
        } else if (key == 80 && choice < limit - 1) { // Down
            choice++;
        }
        return 0;
    }
    else if (key == 13) { // Enter
        return 1;
    }

    return 0; // Other keys
}
void Route( int menuNum=1,std::vector<std::string> menu={"Register", "Login"},int c=0 ) ;
void authMenueOpt(int choice, int& customerid){
           if (choice == 0)//user selected register
           {    
                     registerForm();
                     system("pause");
                } 
                    else if (choice == 1) //user selected login
                    {
                     customerid=loginForm()-2;/*customer id -2 remember it will return 0 -2 = -2 if not Valid and not found*/

                     if(customerid==-102) {
                            system("pause");
                            choice =0;
                            Route(5/*case switch number 5*/,adminsMenu);//user signed in as admin
                        }
                    else if (customerid < 0){//user not valid signning in
                      system("pause");
                        Route(1/*case switch number 1*/,authMenu);//back to auth menu
                    }//valid signning in:
                          system("pause");
                    choice = 0;
                    Route(2/*case switch number 2*/,usersMenu);// user menu >>show movies >>exit
                    }
                  
}


int customerid ;
int movieId ;
void Route( int menuNum,std::vector<std::string> menu,int c ) {
    while (true) {
    static int choice = c;

    printMenu(menu, choice);
    
    int action = makeAction(choice, menu.size(), menu);

    switch (menuNum) {
        case 1: { // auth menu
   
            switch (action) /*action == keys here we want to check only if it == enter or esc*/{
                case 1://enter
                {
                    int userChoice = choice;
                    choice=0;
        authMenueOpt(userChoice, customerid);
                    break;
                }
        
                case -1://esc
                {
                    cout<<"Bye!";
                    exit(0);
                }

                default:/*should be empty with break to reactivate the loop*/

                    break;
            }
            break; // break for case 1
        }

        case 2: { // Movies menu
            switch (action) {
             case 1:
                    if (choice == 0)//>>show movies
                    {Route (3,preper_Movies_Properties_As_Menue (movies));}// id 1 title desc duration 
                    else if (choice == 1)Route(1,authMenu);//>>Exit       
                    system("pause");
                    break;
                case -1:
                 choice = 0;
               Route(1,authMenu);
                default:
                    break;
            }
            break; // break for case 2
        }
        case 3: { // Selected Movie Show Times 
            switch (action) {
             case 1://enter
                    {
                        int UserChoi = choice;
                        choice = 0;
                    {Route (4, preper_Movies_Showtimes_As_Menue (movies,UserChoi,movieId));}
                    } 
                    system("pause");
                    break;
                case -1://Esc back to show movies or exit
                 choice = 0;
                Route (2,usersMenu );

                default:
                    break;
            }
            break; // break for case 3
        }
        case 4: { // reserve seat
            switch (action) {
             case 1://enter
                    {
                        system("cls");
                        if (customerid >= 0 && customerid < (int)Customers.size()) {
                            Customers.at(customerid).bookSeat(movieId,choice);
                        } else {
                            cout << "Error: Please login first!\n";
                        }
                    } 
                    system("pause");
                    choice =0;
                 {Route (3,preper_Movies_Properties_As_Menue (movies));}//return to movies menue after reservation

                    break;
                case -1://Esc back to movies
                choice = 0;
                 {Route (3,preper_Movies_Properties_As_Menue (movies));}
                default:
                    break;
            }
            break; 
        }
        case 5: { // Admin menu
            switch (action) {
                case 1: // Enter pressed
                    switch (choice) {
                        case 0: // Remove Movies
                        {
                            system("cls");
                            cout << "Current Movies:\n";
                            for (const auto& movie : movies) {
                                cout << "ID: " << movie.getId()
                                     << " || Title: " << movie.getTitle()
                                     << " || Description: " << movie.getdescription()
                                     << " || Duration: " << movie.getduration() << "\n";
                            }

                            int temp = -1;
                            cout << "\nEnter the Id of the movie to remove: ";
                            cin >> temp;

                            bool found = false;
                            for (const auto& movie : movies) {
                                if (movie.getId() == temp) {
                                    found = true;
                                    break;
                                }
                            }

                            if (found) {
                                admin.removeMovie(temp);
                                cout << "\nMovie with Id " << temp << " removed successfully.\n";
                            } else {
                                cout << "\nError: Movie with Id " << temp << " not found!\n";
                            }

                            cout << "\nPress any key to return to Admin Menu...";
                            _getch();
                            Route(5, adminsMenu,0);
                            break;
                        }


                        case 1: // listMovies
                        {
                            system("cls");
                          int index = 0;
      cout << left 
         << setw(5) << "ID" 
         << setw(20) << "Title" 
         << setw(10) << "Duration" << endl;
    cout << "----------------------------------------" << endl;
if (movies.size() == 0)cout << "No Movies in the  List" << endl;
   for (const auto& movie : movies) {
        setColor(9 + (index % 6)); // ألوان مختلفة بالتتابع (9 → 14)
        cout << left
             << setw(5) << movie.getId()
             << setw(20) << movie.getTitle()
             << setw(10) << movie.getduration()
             << endl;

        setColor(7); // رجّع اللون الافتراضي بعد الطباعة
        index++;
    }
                    system("pause");

                            break;
                        }
                        case 2: // listUsers
{
    system("cls");
    int index = 0;

    // عنوان الجدول
    cout << left 
         << setw(10) << "ID"
         << setw(20) << "Name"
         << setw(25) << "Email"
         << setw(10) << "Age" << endl;
    cout << "--------------------------------------------------------------" << endl;

    if (Customers.size() == 0) {
        cout << "No Customers in the List" << endl;
    } else {
        for (const auto& customer : Customers) {
            setColor(9 + (index % 6)); // ألوان حسب الـ index

            cout << left
                 << setw(10) << customer.getId()
                 << setw(20) << customer.getName()
                 << setw(25) << customer.getEmail()
                 << setw(10) << customer.getAge()
                 << endl;

            setColor(7); // رجّع اللون الافتراضي
            ++index;
        }
    }

    system("pause");
    break;
}

                        case 3: // Add Movie
                        {
                            system("cls");
                            cin.ignore();
                            string title, description;
                            int duration;
                            int categoryChoice;
                            vector<ShowTime> showTimes;

                            cout << "\033[3;5H\033[36mEnter Title of Movie: \033[0m";
                            getline(cin >> ws, title);

                            cout << "\033[5;5H\033[36mEnter Description: \033[0m";
                            getline(cin, description);

                            cout << "\033[7;5H\033[36mEnter Duration (minutes): \033[0m";
                            cin >> duration;

                            cout << "\033[9;5H\033[36mSelect Category (0: Action, 1: Comedy, 2: Drama ...): \033[0m";
                            cin >> categoryChoice;
                            Category category = static_cast<Category>(categoryChoice);
                            int numShowTimes;
                            cout << "\033[11;5H\033[36mEnter number of show times: \033[0m";
                            cin >> numShowTimes;
                            cin.ignore();

                            for (int i = 0; i < numShowTimes; i++) {
                                int seatsNum;
                                string date;

                                cout << "\033[" << 13 + i*3 << ";5H\033[36mEnter number of seats for showtime " << i+1 << ": \033[0m";
                                cin >> seatsNum;
                                cin.ignore();

                                cout << "\033[" << 14 + i*3 << ";5H\033[36mEnter date for showtime " << i+1 << " (e.g., 2025-12-31): \033[0m";
                                getline(cin, date);

                                showTimes.emplace_back(seatsNum, date);
                            }

                            Movie newMovie(title, description, duration, category, showTimes);

                            bool exists = false;
                            for (const auto& movie : movies) {
                                if (movie.getId() == newMovie.getId()) {
                                    exists = true;
                                    break;
                                }
                            }

                            if (exists) {
                                cout << "\nID already exists! Movie not added.\n";
                            } else {
                                admin.addMovie(newMovie);
                                cout << "\nMovie added successfully!\n";
                            }

                            cout << "\nPress any key to return to Admin Menu...";
                            _getch();
                            Route(5, adminsMenu);
                            break;
                        }


                        case 4: // Exit
                        choice = 0;
                            Route(1, authMenu,0);// go back to auth menu
                        break;
                        default:
                            break;
                    }
                break;

                case -1: // ESC pressed
                    Route(1, authMenu); // go back to auth menu
                break;

                default:
                break;
            }
            break;

        }

        default:
            break;
    }
}

}

