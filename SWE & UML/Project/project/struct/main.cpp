#include <windows.h>
#include <conio.h>
#include <iostream>
#include <iomanip>
#include <vector>
#include "Customer.h"
#include "globals.h"
#include "Admin.h"
#include "usersMeneuFunctions.h"
#include "Routes.h"
using namespace std;


void Starter(){
        //make static Admin
    ShowTime show1(5,"12:00");
    ShowTime show2(5,"13:00");
    vector<ShowTime> showTimes1 = {show1, show2};

    // Admin adds movies
    Movie m1("Avengers", "Action movie", 120, Category::Action, showTimes1);
    Movie m2("The Hangover", "Comedy movie", 100, Category::Comedy, showTimes1);

    admin.addMovie(m1);
    admin.addMovie(m2);    // Create movies
}





int main() {
    Starter();
     Route();

    cout << "Bye!" << endl;
    return 0;
}




