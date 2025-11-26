#include <iostream>

using namespace std;

class Stack {
private:
    int *Pstk;
    int top;    
    int size;
    static int counter;  
public:
    Stack() {
        size = 10;
        Pstk = new int[size];
        top = -1;
        counter++;
    }
    Stack(int s) {
        size = s;
        Pstk = new int[size];
        top = -1;
        counter++;
    }
    ~Stack() {
        delete[] Pstk;
        cout << "Stack " << counter-- << " Destroyed" << endl;
    }
    Stack &push(int val) {
        if (top == size - 1) {
            cout << "Stack Is Full" << endl;
        } else {
            Pstk[++top] = val;
        }
        return *this;
    }
    Stack &pop() {
        if (top == -1) {
            cout << "Stack Is Empty" << endl;
        } else {
            top--;
        }
        return *this;
    }
    void showElements() const {
        if (top == -1) {
            cout << "Stack is empty" << endl;
        } else {
            for (int i = 0; i <= top; i++) {
                cout << Pstk[i] << " ";
            }
            cout << endl;
        }
    }

    int getTop() const {
        if (top == -1) {
            cout << "Stack Is Empty" << endl;
            return -1; 
        }
        return Pstk[top];
    }

    static int getCounter() {
        return counter;
    }
};

int Stack::counter = 0;

int main() {
    Stack s1;
    s1.push(10).push(20).push(30);
    cout << "Elements in Stack s1: ";
    s1.showElements();
    s1.pop();
    cout << "Elements in Stack s1 after pop: ";
    s1.showElements();
    cout << "Number of Stack instances: " << Stack::getCounter() << endl;
    Stack s2(5);
    s2.push(1).push(2);
    cout << "Elements in Stack s2: ";
    s2.showElements();
    cout << "Number of Stack instances: " << Stack::getCounter() << endl;
    return 0;
}
