#include <iostream>

using namespace std;

class Employee{
    static inline int idCounter = 0; 
    int id;
    string name;
    int age;
    double salary;

public:

    Employee() : name(""), age(0), salary(0.0) {
        id = ++idCounter;  
    }

    int getAge() const { return age; }
    double getSalary() const { return salary; }
    string getName() const { return name; }
    int getId() const { return id; }

    void setName(string empName){ name = empName; }
    void setAge(int empAge){ age = empAge; }
    void setSalary(double empSalary){ salary = empSalary; }
    void setId(int newId){
        id = newId;
    }
};


class Node {
    public:
    Employee Data;
    Node* next;
    Node* prev;
    Node(){
        next = nullptr;
        prev = nullptr;
    }
    ~Node(){
        next = nullptr;
        prev = nullptr;
    }
};


class StackDLL{
    Node *top;
    public:
    StackDLL () : top{nullptr} {}
    ~StackDLL(){
        while (top != nullptr) {
            Node* temp = Pop();  
            delete temp;          
        }
    }
    void Push(Node *pNew){
        if(!top)
            top = pNew;
        else{
            top->next = pNew;
            pNew->prev = top;
            top = pNew;
        }
    }
    Node *Pop(){
        if (top == nullptr) {
            cout << "Stack is Empty !" << endl;
            return nullptr;
        }
        Node * newNode = top;
        top = top -> prev;
        newNode-> prev = nullptr;
        newNode-> next = nullptr;
        if(top)
            top->next = nullptr;
        return newNode;
    }
    Node *Peek(){
        return top;
    }
};

int main() {
    StackDLL stack;

    cout << "=== PUSH NODES ===" << endl;

    // Create and push 3 employees
    for (int i = 1; i <= 3; ++i) {
        Node* n = new Node();
        n->Data.setName("Employee" + to_string(i));
        n->Data.setAge(20 + i);
        n->Data.setSalary(3000 + i * 500);
        stack.Push(n);
        cout << "Pushed: " << n->Data.getName() << endl;
    }

    cout << "\n=== PEEK TOP NODE ===" << endl;
    Node* topNode = stack.Peek();
    if (topNode)
        cout << "Top: " << topNode->Data.getName() << ", Salary: " << topNode->Data.getSalary() << endl;

    cout << "\n=== POP NODES ===" << endl;
    while (Node* n = stack.Pop()) {
        cout << "Popped: " << n->Data.getName() << endl;
        delete n; // important to free memory
    }

    cout << "\n=== TRY TO POP FROM EMPTY STACK ===" << endl;
    Node* n = stack.Pop(); // should print "Stack is Empty !"

    cout << "\n=== STACK DEMO COMPLETE ===" << endl;
    return 0;
}
