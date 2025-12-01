//
// Created by Lenovo on 11/26/2025.
//

#include "Customer.h"

#include <iostream>
#include <ostream>
#include <vector>
#include "globals.h"
#include <algorithm>


void Customer::bookSeat(int  movieIndex, int showTimeid) {


    if (movieIndex >= (int)movies.size() - 1){
movieIndex = movies.size() - 1;
    }
    if (showTimeid >= (int)movies.at(movieIndex).viewShowTimes().size() - 1){
showTimeid = movies.at(movieIndex).viewShowTimes().size() - 1;
    }


    bool Isfull = movies.at(movieIndex).viewShowTimes().at(showTimeid).getIsfull();
    if(Isfull) { cout<<"\n no Seats left \n";return;};
    cout<<"\n You Choosed "+ movies.at(movieIndex).getTitle()+ " film to Reserve \n";
    cout<<"\n at Show Time Number: "+ to_string(showTimeid+1)+ "\n";
    cout<<"\n seat reserved Number: "+ to_string(movies.at(movieIndex).viewShowTimes().at(showTimeid).reserve_a_seat())+ "\n";
    cout<<"\n seats Left  : "+ to_string(movies.at(movieIndex).viewShowTimes().at(showTimeid).getNumberOfSeats())+ " \n";
}

void Customer::displayRole() {
    cout <<" Customer "<<endl;
}

