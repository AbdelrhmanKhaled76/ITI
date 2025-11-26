#include <iostream>
using namespace std;

class Base {
protected:
    int value;

public:
    Base() : value(0) {
        cout << "Base default constructor\n";
    }

    Base(int v) : value(v) {
        cout << "Base parameterized constructor\n";
    }

    void showValue() const {
        cout << "Base value = " << value << endl;
    }

    void whoAmI() const {
        cout << "I am the Base class\n";
    }
};

class Derived : public Base {
private:
    int extra;

public:
    Derived(int v, int e) : Base(v), extra(e) {
        cout << "Derived constructor\n";
    }

    void showBoth() const {
        cout << "Base value = " << value 
            << ", Extra value = " << extra << endl;
    }

    // Method overriding
    void whoAmI() const {
        cout << "I am the Derived class\n";
    }
};


int main() {
    Derived d(10, 20);

    cout << "\n--- Testing inherited functions ---\n";
    d.showValue();       
    d.showBoth();        

    cout << "\n--- Testing overriding ---\n";
    d.whoAmI();          

    cout << "\n--- Calling Base version explicitly ---\n";
    d.Base::whoAmI();    

    return 0;
}
