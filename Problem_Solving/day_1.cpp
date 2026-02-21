#include <algorithm>
#include <iostream>
#include <vector>
#include <map>
using namespace std;
#define Abdelrhman76 ios_base::sync_with_stdio(0),cin.tie(0),cout.tie(0);

void solution() {
    int size,index = -1;
    cin >> size;
    int arr[size];
    for(int i=0; i < size; i++){
        cin >> arr[i];
    }
    int pattern = arr[1] - arr[0];
    for(int i = 0;i < size; i++){
        if(i != size - 1 && arr[i+1] - arr[i] != pattern)
        {
            index = i+1;
            break;
        }
    }
    cout << index + 1 << endl;
}

int main()
{
    Abdelrhman76
    // int t;
    // cin >> t;
    // while (t--) {
        solution();
    // }
    return 0;
}
