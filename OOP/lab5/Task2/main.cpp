#include <iostream>

using namespace std;

int main()
{
    int n;
    cout << "enter the size of the array : ";
    cin >> n;
    int *Parr = new int[n];

    for(int i = 0; i < n; i++){
        cout << "enter the " << i+1 << " element : ";
        cin >> Parr[i];
    }
    for(int i = 0; i < n; i++){
        cout << Parr[i] << " ";
    }
    return 0;
}
