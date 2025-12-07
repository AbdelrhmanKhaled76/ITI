#include <iostream>

using namespace std;

void swap(int &x , int &y){
    int temp = x;
    x = y;
    y = temp;
}

void bubbleSort(int *arr, int size){
    bool isSorted = false;
    int i = 0;
    while(!isSorted){
        isSorted = true;
        for(int j = 0; j < size - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j], arr[j+1]);
                isSorted = false;
            }
        }
        i++;
    }
} 

int main(){
    int size = 8;
    int arr[size] = {3,2,4,6,1,8,5,0};
    bubbleSort(arr, size);
    for(int i = 0; i < size; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}