
    #include "Menus.h"
    #include "globals.h"
    using namespace std;
std::vector<string> usersMenu = {"show Movies", "Exit"};
std::vector<string> authMenu = {"Register", "Login"};
std::vector<string> adminsMenu = {"Remove Movies", "listMovies", "listUsers", "add Movie", "Exit"};

vector<string> preper_Movies_Properties_As_Menue_For_Admin (const vector<Movie>& Movies) {
    vector<string> Movies_as_String;
    for (auto movie:movies)
     Movies_as_String.push_back("id: "+to_string(movie.getId())+" || Title: "+movie.getTitle()+" || Description: "+movie.getdescription()+""
     + " || Duration: "  +to_string(movie.getduration())+" "
    );
                        
    return Movies_as_String;
}
vector<string> preper_Movies_Properties_As_Menue (const vector<Movie>& Movies) {
    vector<string> Movies_as_String;
    for (auto movie:movies)
     Movies_as_String.push_back("id: "+to_string(movie.getId())+" || Title: "+movie.getTitle()+" || Description: "+movie.getdescription()+""
     + " || Duration: "  +to_string(movie.getduration())+" "+" || Enter To see Avilable Seats "
    );
                        
    return Movies_as_String;
}

vector<string> preper_Users_As_Menu(const vector<Customer>& customers) {
        vector<string> customers_as_String;
        for (auto customer : customers)
            customers_as_String.push_back(
                "id: " + to_string(customer.getId()) +
                " || Name: " + customer.getName() +
                " || Email: " + customer.getEmail()
            );
        return customers_as_String;
    }


vector<string> preper_Movies_Showtimes_As_Menue ( vector<Movie>& Movies, int choice,int&movieId) {
    vector<string> Movies_as_String;
    system("cls");
      int index=1;
         for(auto showtime : Movies.at(choice).viewShowTimes()){            
            Movies_as_String.push_back("\nFilm Name "+Movies.at(choice).getTitle()+"\nShow Time Number "+to_string(index)
                +"\nSeats: "+to_string(showtime.getNumberOfSeats() )+ " \nDate is : "+showtime.getDate()
            +"\nReservation Avilabilty: "+(!showtime.getIsfull()?"There are avilable seats\n":"no seats left\n")
            //+"index: "+to_string(index)+"Movies.size()-1: " + to_string(Movies.size()-1)

    );
                ++index;
                        } 
                        movieId=choice;//to know which film that user chose 
    return Movies_as_String;
}
