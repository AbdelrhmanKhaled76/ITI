//
// Created by Lenovo on 11/26/2025.
//

#ifndef CUSTOMER_H
#define CUSTOMER_H
#include "Movie.h"
#include "User.h"


class Customer : public User {
public:


    Customer() = delete;
    Customer(string e, string n, string p, int age) : User(e, n, p, age) {};
  void bookSeat(int  movieid, int showTimeid) ;
    void displayRole() override;
};



#endif //CUSTOMER_H
