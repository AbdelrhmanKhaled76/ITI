#include <iostream>

using namespace std;

void Swap(int &x, int &y){
    int temp = x;
    x = y;
    y = temp;
}

// using pivot as indicator 

int Partition(int *arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            Swap(arr[++i], arr[j]);
        }
    }

    Swap(arr[i + 1], arr[high]);
    return i + 1;
}

void QuickSort(int *arr, int low, int high) {
    if (low < high) {
        int pivotIndex = Partition(arr, low, high);
        QuickSort(arr, low, pivotIndex - 1);
        QuickSort(arr, pivotIndex + 1, high);
    }
}


int main(){
    int size = 8;
    int arr[8] = {3,2,4,6,1,8,5,0};

    QuickSort(arr, 0, size - 1);

    for(int x : arr)
        cout << x << " ";
    cout << endl;
    return 0;
}