#include <iostream>

using namespace std;

int sequential_search(int *arr,int size,int val){
    for(int i = 0; i < size; i++)
        if(arr[i] == val)
            return i;
        else if (arr[i] > val)
            return -1;
    return -1;
}

int main(){
    int arr[] = {1, 3, 5, 7, 9, 11};
    int size = 6;
    int target = 5;

    int index = sequential_search(arr, size, target);

    if (index != -1)
        cout << "Found at index " << index << endl;
    else
        cout << "Not found" << endl;
    return 0;
}