//
// Created by Lenovo on 11/26/2025.
//

#include "ShowTime.h"

#include <iostream>

using namespace std;
int ShowTime::nextId =1;
void ShowTime::showAvailableSeats() {
    cout << "Available seats:\n";

    for (int i = 0; i < seats.size(); i++) {
        if (!seats[i]) {   // false = not reserved
            cout << "Seat " << i + 1 << " is available.\n";
        }
    }

}
    int  ShowTime::getNumberOfSeats(){
        return numberOfSeats;
    };
    bool ShowTime::getIsfull(){
        return isfull;
    };
    
