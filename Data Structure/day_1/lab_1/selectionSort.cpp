#include <iostream>

using namespace std;

int getSmallestIndex(int *arr,int start,int end){
    int smallestIndex = start;
    for(int i = start; i < end; i++ ){
        if(arr[i] < arr[smallestIndex]){
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

void SelectionSort(int *arr,int size){
    for(int i = 0;i < size; i++){
        int smIndex = getSmallestIndex(arr, i, size);
        swap(arr[smIndex], arr[i]);
    }
}

int main (){
    int size = 8;
    int arr[size] = {3,2,4,6,1,8,5,0};
    SelectionSort(arr, size);

    for(int x : arr)
        cout << x << " ";
    cout << endl;
    return 0;
}