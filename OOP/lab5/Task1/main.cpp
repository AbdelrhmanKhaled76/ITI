#include <iostream>

using namespace std;

void swapByReference(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

void swapbyAddress(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x =3, y =4;
    cout << "before swapping x = " << x << " y = " << y << endl;

    swapByReference(x , y);
    cout << "after swapping first time x = " << x << " y = " << y << endl;

    swapbyAddress(&x , &y);
    cout << "after swapping second time x = " << x << " y = " << y << endl;

    return 0;
}
