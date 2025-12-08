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

class QueueDLL{
    Node *front;
    Node *back;
    public:
    QueueDLL() : front{nullptr}, back{nullptr} {}
    ~QueueDLL(){
        while(front){
            Node* DeqNode = DeQ();
            delete DeqNode;
        }
    }
    void Enq(Node *pNew){
        if(!front)
            front = back = pNew;
        else{
            pNew->next = back;
            back->prev = pNew;
            pNew->prev = nullptr;
            back = pNew;
        }
    }
    Node *Peek(){
        if(!front){
            cout << "Queue is Empty !";
            return nullptr;
        }
        return front;
    };
    Node *DeQ(){
        if(!front){
            cout << "Queue is Empty !";
            return nullptr;
        }
        Node *tempPtr = front;
        front = front->prev;
        if(front)
            front->next = nullptr;
        else
            back = nullptr;
        tempPtr->next = nullptr;
        tempPtr->prev = nullptr;
        return tempPtr;
    };
};

int main() {
    QueueDLL q;

    cout << "=== ENQUEUE 3 Employees ===" << endl;

    for (int i = 1; i <= 3; ++i) {
        Node* n = new Node();
        n->Data.setName("Employee" + to_string(i));
        n->Data.setAge(20 + i);
        n->Data.setSalary(3000 + i * 400);

        q.Enq(n);
        cout << "Enqueued: " << n->Data.getName() << endl;
    }

    cout << "\n=== PEEK FRONT ===" << endl;
    Node* frontNode = q.Peek();
    if (frontNode)
        cout << "Front: " << frontNode->Data.getName()
            << ", Salary: " << frontNode->Data.getSalary() << endl;

    cout << "\n=== DEQUEUE ALL ===" << endl;
    while (Node* n = q.DeQ()) {
        cout << "Dequeued: " << n->Data.getName() << endl;
        delete n;  // free memory
    }

    cout << "\n=== TRY TO DEQ EMPTY QUEUE ===" << endl;
    q.DeQ(); // should print "Queue is Empty!"

    cout << "\n=== DONE ===" << endl;
    return 0;
}
