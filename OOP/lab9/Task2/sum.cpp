#include <iostream>

using namespace std;

#include <iostream>

using namespace std;

class Complex {
private:
    float real{0};
    float image{0};
    static int counter;
public:
    Complex() = default;

    Complex(float i) : real(0), image(i){
        cout << "Constructor with one parameter called" << endl;
        counter++;
    }
    Complex(float r, float i) : real(r), image(i)  {
        cout << "Constructor with two parameters called" << endl;
        counter++;
    }
    ~Complex() {
        cout << "Destructor called with counter : " << counter-- << endl;
    }

    Complex operator+(const Complex &other) const {
        return Complex(this->real + other.real, this->image + other.image);
    }

    Complex operator-(const Complex &other) const {
        return Complex(this->real - other.real, this->image - other.image);
    }

    Complex operator*(const Complex &other) const {
        float r = real * other.real - image * other.image;
        float i = real * other.image + image * other.real;
        return Complex(r, i);
    }

    Complex operator/(const Complex &other) const {
        float denom = other.real * other.real + other.image * other.image;
        if (denom == 0) {
            cout << "Division by zero is not allowed." << endl;
            return Complex(0,0);
        }
        float r = (real * other.real + image * other.image) / denom;
        float i = (image * other.real - real * other.image) / denom;
        return Complex(r, i);
    }

    Complex& operator++() {
        this->real += 1;
        return *this;
    }

    Complex operator++(int) {
        Complex temp = *this; 
        this->real += 1;      
        return temp;         
    }

    Complex& operator--() {
        this->real -= 1;
        return *this;
    }

    Complex operator--(int) {
        Complex temp = *this; 
        this->real -= 1;     
        return temp;         
    }

    bool operator<(const Complex& other) const {
        return (real*real + image*image) < (other.real*other.real + other.image*other.image);
    }

    bool operator>(const Complex& other) const {
        return (real*real + image*image) > (other.real*other.real + other.image*other.image);
    }

    operator string() {
        string s;
        if (image == 0)
            s = to_string(real);
        else if (real == 0)
            s = to_string(image) + "i";
        else
            s = to_string(real) + (image > 0 ? " + " : " - ") + to_string(abs(image)) + "i";
        return s;
    }

    static int getCounter() {
        return counter;
    }

    friend ostream &operator<<(ostream &out, Complex &c);
    friend istream &operator>>(istream &in, Complex &c);

};

int Complex::counter = 0;

ostream &operator<<(ostream &out, Complex &c) {
    if (c.real == 0 && c.image == 0) {
        out << "0";
    } else if (c.image == 0) {
        out << c.real;
    } else if (c.real == 0) {
        out << c.image << "i";
    } else {
        out << c.real;
        if (c.image > 0)
            out << " + " << c.image << "i";
        else
            out << " - " << -c.image << "i";
    }
    return out;
}

istream &operator>>(istream &in, Complex &c) {
    cout << "Enter real part: ";
    in >> c.real;
    cout << "Enter imaginary part: ";
    in >> c.image;
    return in;
}

template <typename T>
T sum (T num1 , T num2){
    return num1 + num2;
}


int main() {
    // Example 1: integers
    int a = 5, b = 10;
    cout << "Sum of integers: " << sum<int>(a, b) << endl;

    // Example 2: floats
    float x = 2.5f, y = 4.7f;
    cout << "Sum of floats: " << sum<float>(x, y) << endl;

    // Example 3: doubles
    double d1 = 3.141, d2 = 2.718;
    cout << "Sum of doubles: " << sum<double>(d1, d2) << endl;

    // Example 4: Complex numbers
    Complex c1(3, -2), c2(-1, 4);
    Complex cSum = sum<Complex>(c1, c2);
    cout << "Sum of complex numbers: " << cSum << endl;

    return 0;
}
