//
// Created by Lenovo on 11/26/2025.
//

#include "Movie.h"
#include "Movie.h"

int Movie::nextId =1;
Movie::Movie( string title, string description,
    int duration, Category category,vector<ShowTime> showTimes) {
    this->id = nextId;
    nextId++;
    this->title = title;
    this->description = description;
    this->duration = duration;
    this->category = category;
    this->showTimes = showTimes;
}

vector<ShowTime>& Movie::viewShowTimes() {

    return showTimes;
}
int Movie::getId() const {
    return id;
}
string Movie::getTitle() const {
    return title;
}

  string Movie::getdescription() const {
    return description;
  }
    int Movie::getduration() const {
        return duration;
    };

    Category Movie::getcategory() const {

        return category;
    } ;

