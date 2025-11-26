#include <iostream>

using namespace std;

int main() {
    float num1, num2;
    cout << "Enter two integers: ";
    cin >> num1 >> num2;
    char c;
    while(true){
        cout << "choose the operation key from the following a , b, c, d, e: ";
        cin >> c;
        switch(tolower(c)) {
            case 'a':
                cout << "Addition: " << num1 + num2 << endl;
                break;
            case 'b':
                cout << "Subtraction: " << num1 - num2 << endl;
                break;
            case 'c':
                cout << "Multiplication: " << num1 * num2 << endl;
                break;
            case 'd':
                if(num2 != 0) {
                    cout << "Division: " << num1 / num2 << endl;
                } else {
                    cout << "Error: Division by zero" << endl;
                }
                break;
            case 'e':
                cout << "Exiting Program " << endl;
                return 0;
                break;
            default:
                cout << "Invalid operation key" << endl;
        }
    }
    return 0;
}