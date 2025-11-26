#include <iostream>
#include <memory>
using namespace std;

int main() {
    // Raw pointers
    int val = 50;
    int* ptr = &val;
    int** ptr2 = &ptr;

    cout << "Raw pointers:" << endl;
    cout << "Value = " << val << endl;
    cout << "Single pointer = " << *ptr << endl;
    cout << "Pointer of pointer = " << **ptr2 << endl;

    // Modern smart pointers
    auto val_shared = make_shared<int>(50);
    auto ptr_shared = val_shared; // another shared owner

    cout << "\nShared pointers:" << endl;
    cout << "Value = " << *val_shared << endl;
    cout << "Value via ptr_shared = " << *ptr_shared << endl;

    return 0;
}
