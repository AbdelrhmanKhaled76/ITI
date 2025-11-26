#include <iostream>

using namespace std;

int main() {
    int n;
    cout << "Enter the square size: ";
    cin >> n;
    for(int i = 0; i < n; ++i) {
        for(int j = 0; j < n; ++j) {
            if(i == j){
                cout << "* ";
                continue;
            }
            cout << "- ";
        }
        cout << endl;
    }
    return 0;
}