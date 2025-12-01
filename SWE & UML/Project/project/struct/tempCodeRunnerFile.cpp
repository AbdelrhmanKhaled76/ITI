//#include <iostream>
//#include "Admin.h"
//#include "Movie.h"
//#include "ShowTime.h"
//#include "globals.h"
//
//using namespace std;
//
//
//int main() {
//    // Admin admin;
//
//    // Create some ShowTimes
//    ShowTime show1(5);
//    ShowTime show2(5);
//    vector<ShowTime> showTimes1 = {show1, show2};
//
//    // Create movies
//    Movie m1("Avengers", "Action movie", 120, Category::Action, showTimes1);
//    Movie m2("The Hangover", "Comedy movie", 100, Category::Comedy, showTimes1);
//
//    // Admin adds movies
//    // admin.addMovie(m1);
//    // admin.addMovie(m2);
//
//    // Display all movies
//    cout << "\nCurrent Movies:\n";
//    for (auto &m : movies) {
//        cout << m.getId() << ": " << m.getTitle() << endl;
//    }
//
//    // Remove a movie
//    admin.removeMovie(1);
//
//    // Display remaining movies
//    cout << "\nMovies after removal:\n";
//    for (auto &m : movies) {
//        cout << m.getId() << ": " << m.getTitle() << endl;
//    }
//
//    return 0;
//}
