#include <iostream>
#include <cmath>
using namespace std;

class Complex {
private:
    float real;
    float image;
    static int counter;

public:
    Complex(float i) {
        cout << "Constructor with one parameter called" << endl; 
        real = 0;
        image = i;
        counter++;
    }

    Complex(float r, float i) {
        cout << "Constructor with two parameters called" << endl;
        real = r;
        image = i;
        counter++;
    }

    ~Complex() {
        cout << "Destructor called with counter : " << counter-- << endl; 
    }

    static int getCounter() {
        return counter;
    }

    void printComplex() {
        if (real == 0 && image == 0) {
            cout << "0" << endl; 
            return;
        }

        // Print real part if nonzero
        if (real != 0)
            cout << real;

        // Print imaginary part
        if (image != 0) {
            if (real != 0)
                cout << (image > 0 ? " + " : " - ");
            else if (image < 0)
                cout << "-";

            float absImg = abs(image);

            if (absImg != 1)
                cout << absImg;

            cout << "i";
        }

        cout << endl;
    }
};

int Complex::counter = 0;

int main() {
    Complex c1(5, 7);
    c1.printComplex(); // -5 + 7i
    cout << "Current counter: " << Complex::getCounter() << endl;

    Complex c2(-3, -3);
    c2.printComplex();  // -3 - 3i
    cout << "Current counter: " << Complex::getCounter() << endl;

    Complex c3(0, -8);
    c3.printComplex(); // -8i
    cout << "Current counter: " << Complex::getCounter() << endl;

    Complex c4(8);
    c4.printComplex();  // 8i
    cout << "Current counter: " << Complex::getCounter() << endl;

    Complex c6(-9);
    c6.printComplex();  // -9i
    cout << "Current counter: " << Complex::getCounter() << endl;

    Complex c7(-9, 3);
    c7.printComplex();  // -9 + 3i
    cout << "Current counter: " << Complex::getCounter() << endl;

    Complex c8(8, 1);
    c8.printComplex(); // 8 + i
    cout << "Current counter: " << Complex::getCounter() << endl;

    return 0;
}
