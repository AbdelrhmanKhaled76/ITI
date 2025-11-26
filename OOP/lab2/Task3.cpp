#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter odd number (3, 5, 7...): ";
    cin >> n;

    if (n % 2 == 0) {
        cout << "Magic box works for odd numbers only!\n";
        return 0;
    }

    // clear screen
    cout << "\033[2J";

    int row = 0;
    int col = n / 2;
    int total = n * n;

    for (int num = 1; num <= total; num++) {
        int color = (num % 7) + 31;
        cout << "\033[" << (row * 2 + 2) << ";" << (col * 6 + 2) << "H"; // move cursor
        cout << "\033[" << color << "m" << num << "\033[0m";
        cout.flush();

        int newRow = (row - 1 + n) % n;
        int newCol = (col + 1) % n;


        if (num % n == 0)
            row = (row + 1) % n;
        else {
            row = newRow;
            col = newCol;
        }
    }

    // Move cursor below box
    cout << "\033[" << (n * 2 + 2) << ";1H";
    cout << "\n\033[32mMagic constant = " << n * (n * n + 1) / 2 << "\033[0m\n";
    return 0;
}
