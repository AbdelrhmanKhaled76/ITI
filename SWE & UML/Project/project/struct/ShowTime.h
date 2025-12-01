//
// Created by Lenovo on 11/26/2025.
//

#ifndef SHOWTIME_H
#define SHOWTIME_H
#include <string>
#include <vector>

using namespace std;

class ShowTime {
    static  int nextId ;
    int id;
    int numberOfSeats=5 ;
    vector<bool> seats;
    string date ;
    bool isfull ;
    public:
    ShowTime(int num ,string date) {
        id = nextId++;
        numberOfSeats = num;
        this->date = date;
        seats.resize(num, false);
        isfull = false;
        
    }
    void showAvailableSeats();
    int getId(){
return id;
    };
    int getNumberOfSeats();
    string getDate(){return date;}
    bool getIsfull();
    void setIsfull(){
        isfull = true;
    };
    int reserve_a_seat(){
        if (numberOfSeats == 1){setIsfull();}
        int temp =numberOfSeats;
       numberOfSeats-=1;
       return temp-numberOfSeats;
    };

};



#endif //SHOWTIME_H
