#include <iostream>

using namespace std;

int main() {
    int mark;
    cout << "Enter your mark: ";
    cin >> mark;
    if(mark >= 85 && mark <= 100) {
        cout << "Grade: A" << endl;
    } else if(mark >= 75 && mark < 85) {
        cout << "Grade: B" << endl;
    } else if(mark >= 65 && mark < 75) {
        cout << "Grade: C" << endl;
    } else if(mark >= 60 && mark < 65) {
        cout << "Grade: D" << endl;
    } else if(mark < 60 && mark >= 0) {
        cout << "Grade: F" << endl;
    }
    else {
        cout << "Invalid mark entered." << endl;
    }
    return 0;
}