#include <iostream>

using namespace std;

// int binarySearch(int *arr,int first, int last, int val){
//     if(first <= last){
//         int middle = (first + last) / 2;
//         if(arr[middle] == val)
//             return middle;
//         else if (arr[middle] < val)
//             return binarySearch(arr, first, middle - 1, val);
//         else 
//             return binarySearch(arr, middle + 1 , last, val);
//     }
//     return -1;
// }

//iterative
int binarySearch(int *arr,int first, int last, int val){
    while (first <= last) {
        int middle = (first + last) / 2;

        if (arr[middle] == val)
            return middle;

        else if (arr[middle] < val)
            first = middle + 1;

        else
            last = middle - 1;
    }
    return -1;
}

int main(){
    int arr[] = {1, 3, 5, 7, 9, 11};
    int size = 6;
    int target = 5;

    int index = binarySearch(arr, 0, size - 1, target);

    if (index != -1)
        cout << "Found at index " << index << endl;
    else
        cout << "Not found" << endl;
    return 0;
}