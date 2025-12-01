#include <iostream>

using namespace std;

int fibonacci(int num) {
    if (num <= 1)
        return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}


void decimalToBinary(int num) {
    if (num == 0)
        return;

    decimalToBinary(num / 2);

    cout << num % 2 << " ";
}

int main()
{
    for (int i = 0; i < 8; ++i)
        cout << fibonacci(i) << " ";


    cout << endl;

    decimalToBinary(13);
}
