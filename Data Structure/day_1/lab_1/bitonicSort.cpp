#include <iostream>
using namespace std;

// combine into larger bitonic sequence
void bitonicMerge(int arr[], int start, int size, bool asc) {
    if (size > 1) {
        int k = size / 2;
        for (int i = start; i < start + k; i++) {
            if (asc == (arr[i] > arr[i + k])) swap(arr[i], arr[i + k]);
        }
        bitonicMerge(arr, start, k, asc);
        bitonicMerge(arr, start + k, k, asc);
    }
}

// breaking list into bitonic sequence
void bitonicSort(int arr[], int start, int size, bool asc) {
    if (size > 1) {
        int k = size / 2;

        bitonicSort(arr, start, k, true);
        bitonicSort(arr, start + k, k, false);

        bitonicMerge(arr, start, size, asc);
    }
}

int main() {
    int arr[] = {8, 3, 5, 1, 6, 2, 4, 7};
    int n = sizeof(arr)/sizeof(arr[0]);

    cout << "Original array: ";
    for(int i=0;i<n;i++) cout << arr[i] << " ";
    cout << endl;

    bitonicSort(arr, 0, n, true);

    cout << "Sorted array:   ";
    for(int i=0;i<n;i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
}
