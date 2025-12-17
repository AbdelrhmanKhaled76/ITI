#include <iostream>
#include <vector>
#include <limits>

using namespace std;

template <typename T>
class BinaryHeap {
private:
    int currentSize;
    vector<T> data;

public :    
    explicit BinaryHeap(int capacity = 100) : currentSize(0) , data(capacity + 1) {
        data[0] = numeric_limits<T>::min();
    }

    T& operator[](int index){
        return data[index];
    }

    void ViewHeap() const {
        for(int i = 1; i <= currentSize; ++i){
            cout << data[i] << " ";
        }
        cout << endl;
    }

    bool isEmpty() const {
        return currentSize == 0;
    }

    T& FindMin(){
        if (isEmpty()) {
            throw runtime_error("Heap is empty");
        }
        return data[1];
    }

    void insert(const T &x){
        if(currentSize + 1 == data.size()){
            data.resize(data.size() * 2);
        }
        int hole = ++currentSize;
        for(; x < data[hole / 2]; hole /= 2){
            data[hole] = data[hole / 2];
        }
        data[hole] = x;
    }

    T DeleteMin(){
        if(isEmpty()){
            throw runtime_error("Heap is empty");
        }
        T minItem = data[1];

        data[1] = data[currentSize--];

        percolateDown(1);
        
        return minItem;
    }

    int leftChild(int index) const {
        return index * 2;
    }
    int rightChild(int index) const {
        return index * 2 + 1;
    }
    int parent(int index) const {
        return index / 2;
    }

    void percolateDown(int hole){
        T tmp = data[hole];
        int child ;
        for(; leftChild(hole) <= currentSize; hole = child){
            child = leftChild(hole);
            if(child != currentSize && data[child + 1] < data[child]){
                child++;
            }
            if(data[child] < tmp){
                data[hole] = data[child];
            }
            else{
                break;
            }
        }
        data[hole] = tmp;
    }
};


int main(){

    BinaryHeap<int> heap;
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.ViewHeap();
    cout << "Minimum: " << heap.FindMin() << endl;
    cout << "Deleted Minimum: " << heap.DeleteMin() << endl;
    heap.ViewHeap();
    cout << "Minimum: " << heap[1] << endl;
    return 0;
}