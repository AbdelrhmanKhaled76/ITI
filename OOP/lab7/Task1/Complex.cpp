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


int main() {
    cout << "--- Creating default Complex object ---\n";
    Complex c1;
    cout << "c1: " << c1 << endl;

    cout << "\n--- Reading a complex number from user ---\n";
    cin >> c1; 
    cout << "You entered: " << c1 << endl;

    cout << "\n--- Creating Complex with one parameter ---\n";
    Complex c2(3.0f);  
    cout << "c2: " << c2 << endl;

    cout << "\n--- Creating Complex with two parameters ---\n";
    Complex c3(4.0f, -2.0f); 
    cout << "c3: " << c3 << endl;

    cout << "\n--- Testing addition ---\n";
    Complex sum = c1 + c3;
    cout << "c1 + c3 = " << sum << endl;

    cout << "\n--- Testing subtraction ---\n";
    Complex diff = c3 - c2;
    cout << "c3 - c2 = " << diff << endl;

    cout << "\n--- Testing multiplication ---\n";
    Complex prod = c2 * c3;
    cout << "c2 * c3 = " << prod << endl;

    cout << "\n--- Testing division ---\n";
    Complex quot = c3 / c2;
    cout << "c3 / c2 = " << quot << endl;

    cout << "\n--- Testing comparison operators ---\n";
    cout << c2 << " < " << c3 << " ? " << (c2 < c3 ? "true" : "false") << endl;
    cout << c3 << " > " << c1 << " ? " << (c3 > c1 ? "true" : "false") << endl;

    cout << "\n--- Testing type conversion to string ---\n";
    string s = (string)c3;
    cout << "c3 as string: " << s << endl;

    cout << "\n--- Current Complex objects count ---\n";
    cout << Complex::getCounter() << endl;

    cout << "\n--- End of main ---\n";
    return 0;
}