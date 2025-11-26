#include <iostream>
using namespace std;

template <class T>
class Stack {
private:
    int top{-1};    
    int size{5};
    T *Pstk{new T[size]};
    static int counter;

public:
    Stack() = delete;

    Stack(int s) : size(s), top(-1) , Pstk(new T[size]) {
        counter++;
    }

    // copy constructor
    Stack(const Stack &other) {
        size = other.size;
        top = other.top;
        Pstk = new T[size];
        for (int i = 0; i <= top; i++)
            Pstk[i] = other.Pstk[i];
        counter++;
    }

    // move operator
    Stack(Stack &&other) noexcept {
        size = other.size;
        top = other.top;
        Pstk = other.Pstk;
        other.Pstk = nullptr;
        other.top = -1;
        other.size = 0;
        counter++;
    }

    ~Stack() {
        delete[] Pstk;
        cout << "Stack destroyed. Remaining count: " << --counter << endl;
    }

    Stack &push(T val) {
        if (top == size - 1) {
            cout << "Stack Overflow" << endl;
        } else {
            Pstk[++top] = val;
        }
        return *this;
    }

    Stack &pop() {
        if (top == -1) {
            cout << "Stack Underflow" << endl;
        } else {
            --top;
        }
        return *this;
    }

    void showElements() const {
        if (top == -1) {
            cout << "Stack is empty" << endl;
        } else {
            for (int i = 0; i <= top; i++)
                cout << Pstk[i] << " ";
            cout << endl;
        }
    }

    // index operator 
    T& operator[](int index) {
        if(index < 0 || index >top){
            throw out_of_range("Index out of bounds");
        }
        return Pstk[index];
    }

    static int getCounter() { return counter; }

};

template <class T>
int Stack<T>::counter = 0;


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

    operator string() const {
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

ostream &operator<<(ostream &out, Complex &c) {
    out << string(c); 
    return out;
}

istream &operator>>(istream &in, Complex &c) {
    cout << "Enter real part: ";
    in >> c.real;
    cout << "Enter imaginary part: ";
    in >> c.image;
    return in;
}

int Complex::counter = 0;

int main() {
    cout << "--- Creating stack s1 ---\n";
    Stack<int> s1(5);

    cout << "\n--- Pushing elements to s1 ---\n";
    s1.push(10).push(20).push(30).push(40);
    s1.showElements(); // 40 30 20 10

    cout << "\n--- Popping top element ---\n";
    s1.pop();
    s1.showElements(); // 30 20 10

    cout << "\n--- Accessing elements using operator[] ---\n";
    cout << "s1[0] = " << s1[0] << endl; // 10
    cout << "s1[2] = " << s1[2] << endl; // 30

    
    Stack<char> s2(5);
    s2.push('a').push('b').push('c');
    s2.showElements(); // a b c
    
    Stack<float> s3(5);
    s3.push(1.5).push(2.5).push(3.2);
    s3.showElements(); // 1.5 2.5 3.2

    Stack<Complex> s4(5);
    s4.push(Complex(3, -3)).push(Complex(-2, 1)).push(Complex(2)); 
    s4.showElements(); // 3 - 3i , -2 + i,  2

    return 0;
}
