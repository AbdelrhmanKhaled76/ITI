#include <iostream>
using namespace std;

void Merge(int *arr, int Lfirst, int Llast, int Rfirst, int Rlast) {
    int size = Rlast - Lfirst + 1;
    int TempArr[size];

    int index = 0;
    int saveIndex = Lfirst;

    int left = Lfirst, right = Rfirst;

    while(left <= Llast && right <= Rlast) {
        if(arr[left] < arr[right])
            TempArr[index++] = arr[left++];
        else
            TempArr[index++] = arr[right++];
    }

    while(left <= Llast)
        TempArr[index++] = arr[left++];

    while(right <= Rlast)
        TempArr[index++] = arr[right++];

    for(int i = 0; i < size; i++)
        arr[saveIndex + i] = TempArr[i];
}

void MergeSort(int *arr, int first, int last) {
    if(first < last) {
        int middle = (first + last) / 2;
        MergeSort(arr, first, middle);
        MergeSort(arr, middle + 1, last);
        Merge(arr, first, middle, middle + 1, last);
    }
}

int main() {
    int size = 8;
    int arr[8] = {3,2,4,6,1,8,5,0};

    MergeSort(arr, 0, size - 1);

    for(int x : arr)
        cout << x << " ";
    cout << endl;

    return 0;
}
