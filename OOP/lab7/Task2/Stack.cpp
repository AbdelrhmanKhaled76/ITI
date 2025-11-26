#include <iostream>
using namespace std;

class Stack {
private:
    int top{-1};    
    int size{5};
    int *Pstk{new int[size]};
    static int counter;

public:
    Stack() = delete;

    Stack(int s) : size(s), top(-1) , Pstk(new int[size]) {
        counter++;
    }

    // copy constructor
    Stack(Stack &other) {
        size = other.size;
        top = other.top;
        Pstk = new int[size];
        for (int i = 0; i <= top; i++)
            Pstk[i] = other.Pstk[i];
        counter++;
    }

    // move operator
    Stack(Stack &&other)  {
        size = other.size;
        top = other.top;
        Pstk = other.Pstk;
        other.Pstk = nullptr;
        other.top = -1;
        other.size = 0;
        counter++;
    }

    ~Stack() {
        delete[] Pstk;
        cout << "Stack destroyed. Remaining count: " << --counter << endl;
    }

    Stack &push(int val) {
        if (top == size - 1) {
            cout << "Stack Overflow" << endl;
        } else {
            Pstk[++top] = val;
        }
        return *this;
    }

    Stack &pop() {
        if (top == -1) {
            cout << "Stack Underflow" << endl;
        } else {
            --top;
        }
        return *this;
    }

    void showElements() const {
        if (top == -1) {
            cout << "Stack is empty" << endl;
        } else {
            for (int i = 0; i <= top; i++)
                cout << Pstk[i] << " ";
            cout << endl;
        }
    }

    // index operator 
    int operator[](int index) {
        if(index < 0 || index >top){
            cout << "index out of boundry" << endl;
            return -1;
        }
        return Pstk[index];
    }

    static int getCounter() { return counter; }

};


int Stack::counter = 0;

#include <iostream>
using namespace std;

int main() {
    cout << "--- Creating stack s1 ---\n";
    Stack s1(5);

    cout << "\n--- Pushing elements to s1 ---\n";
    s1.push(10).push(20).push(30).push(40);
    s1.showElements(); // 40 30 20 10

    cout << "\n--- Popping top element ---\n";
    s1.pop();
    s1.showElements(); // 30 20 10

    cout << "\n--- Accessing elements using operator[] ---\n";
    cout << "s1[0] = " << s1[0] << endl; // 10
    cout << "s1[2] = " << s1[2] << endl; // 30
    cout << "s1[5] = " << s1[5] << endl; // out of bounds

    cout << "\n--- Using copy constructor to create s2 ---\n";
    Stack s2(s1); // Copy constructor
    cout << "s2 elements: ";
    s2.showElements();

    cout << "\n--- Using move constructor to create s3 ---\n";
    Stack s3(std::move(s1)); // Move constructor
    cout << "s3 elements: ";
    s3.showElements();
    cout << "s1 elements after move: ";
    s1.showElements(); // should be empty / invalidated

    cout << "\n--- Pushing more elements to s3 ---\n";
    s3.push(50).push(60);
    s3.showElements();

    cout << "\n--- Static counter check ---\n";
    cout << "Number of Stack instances: " << Stack::getCounter() << endl;

    cout << "\n--- End of main ---\n";
    return 0;
}

