#include <iostream>

using namespace std;

template <typename T>
class dynamic_array {

private:
    T* data;
    int capacity;
    int length;

    void resize(int new_Capacity) {
        if(new_Capacity < length) {
            new_Capacity = length;
        }
        capacity = new_Capacity;
        T* new_data = new T[capacity];
        for (int i = 0; i < length; ++i) {
            new_data[i] = data[i];
        }
        delete[] data;
        data = new_data;
    } 
public :
    dynamic_array() : capacity(2), length(0) {
        data = new T[capacity];
    }

    ~dynamic_array() {
        delete[] data;
    }

    dynamic_array(const dynamic_array &other) : capacity(other.capacity), length(other.length) {
        data = new T[capacity];
        for (int i = 0; i < length; ++i) {
            data[i] = other.data[i];
        }
    }

    dynamic_array& operator=(const dynamic_array& other) {
        if (this == &other)
            return *this;

        T* newData = new T[other.capacity];

        for (int i = 0; i < other.length; ++i) {
            newData[i] = other.data[i];
        }

        delete[] data;        
        data = newData;
        capacity = other.capacity;
        length = other.length;

        return *this;
    }


    void Trim() {
        resize(length);
    }

    void push_back(const T& value) {
        if (length == capacity) {
            resize(capacity * 2);
        }
        data[length++] = value;
    }

    T& operator[](int index) {
        if(index < 0 || index >= length) {
            throw out_of_range("Index out of range");
        }
        return data[index];
    }

    int size() const {
        return length;
    }

    int get_capacity() const {
        return capacity;
    }

    void RemoveAt(int index) {
        if (index < 0 || index >= length) {
            throw out_of_range("Index out of range");
        }
        for (int i = index; i < length - 1; ++i) {
            data[i] = data[i + 1];
        }
        --length;
        // if (length <= capacity / 4 && capacity > 2) {
        //     resize(capacity / 2);
        // }
    }

    void Remove(const T& value){
        for (int i = 0; i < length; ++i) {
            if (data[i] == value) {
                RemoveAt(i);
                return; 
            }
        }
    }
};


int main () {

    dynamic_array<int> arr;
    arr.push_back(10);
    cout << "\nSize: " << arr.size() << ", Capacity: " << arr.get_capacity() << endl;
    arr.push_back(20);
    cout << "\nSize: " << arr.size() << ", Capacity: " << arr.get_capacity() << endl;
    arr.push_back(30);
    cout << "\nSize: " << arr.size() << ", Capacity: " << arr.get_capacity() << endl;
    arr.RemoveAt(1);
    cout << "\nSize: " << arr.size() << ", Capacity: " << arr.get_capacity() << endl ;
    arr.Remove(10);
    cout << "\nSize: " << arr.size() << ", Capacity: " << arr.get_capacity() << endl ;
    arr.push_back(40);
    cout << "\nSize: " << arr.size() << ", Capacity: " << arr.get_capacity() << endl << endl ;
    cout << "Array elements: " << endl << endl;
    for (int i = 0; i < arr.size(); ++i) {
        cout << arr[i] << " ";
    }
    cout << endl << endl;
    return 0;
}