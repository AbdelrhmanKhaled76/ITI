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

class SortedDoublyLinkedList{
    Node* head;
    Node* tail;
    public:
    SortedDoublyLinkedList(){
        head = nullptr;
        tail = nullptr;
    }
    SortedDoublyLinkedList(const SortedDoublyLinkedList &other) {
        head = nullptr;
        tail = nullptr;

        Node* pCurrent = other.head;
        while (pCurrent != nullptr) {
            Node* newNode = new Node();
            newNode->Data = pCurrent->Data;

            if (head == nullptr) {
                head = newNode;
                tail = newNode;
            } else {
                tail->next = newNode;
                newNode->prev = tail;
                tail = newNode;
            }

            pCurrent = pCurrent->next;
        }
    }
    ~SortedDoublyLinkedList(){
        Node *pDelete = head;
        while(pDelete != nullptr){
            Node *pTemp = pDelete;
            pDelete = pDelete->next;
            delete pTemp;
        }
    }
    SortedDoublyLinkedList& operator=(const SortedDoublyLinkedList& other){
        if (this == &other) return *this; // self-assignment check

    Node* currentThis = head;
    Node* currentOther = other.head;
    Node* lastThis = nullptr;

    // Step 1: Copy or reuse nodes
    while (currentOther != nullptr) {
        if (currentThis) {
            // Reuse existing node, copy data
            currentThis->Data = currentOther->Data;
        } else {
            // Create new node at the end
            Node* newNode = new Node();
            newNode->Data = currentOther->Data;
            newNode->prev = lastThis;
            newNode->next = nullptr;

            if (lastThis)
                lastThis->next = newNode;
            else
                head = newNode; 

            currentThis = newNode;
        }

        lastThis = currentThis;
        currentThis = currentThis->next;
        currentOther = currentOther->next;
    }

    // Step 2: Remove extra nodes in this list if any
    if (lastThis) {
        Node* temp = lastThis->next;
        lastThis->next = nullptr;
        while (temp != nullptr) {
            Node* next = temp->next;
            delete temp;
            temp = next;
        }
        tail = lastThis;
    } else {
        // other list was empty → delete all nodes in this list
        currentThis = head;
        while (currentThis != nullptr) {
            Node* next = currentThis->next;
            delete currentThis;
            currentThis = next;
        }
        head = tail = nullptr;
    }

    return *this;
    }
    Node *operator[](int index){
        if(index < 0 || index >= NodeCount())
            return nullptr;

        Node* curr = head;
        for(int i = 0; i < index; i++)
            curr = curr->next;

        return curr;
    }
    void InsertNode(int id){
        Node *newNode = new Node();
        newNode->Data.setId(id);
        cout << "enter name: ";
        string name;
        cin >> name;
        newNode->Data.setName(name);
        cout << "enter age: ";
        int age;
        cin >> age;
        newNode->Data.setAge(age);
        cout << "enter salary: ";
        double salary;
        cin >> salary;
        newNode->Data.setSalary(salary);
        if(head == nullptr){
            //empty list
            head = newNode;
            tail = newNode;
        }
        else {
            Node *pCurrent = head;
            while(pCurrent != nullptr && pCurrent->Data.getId() < id){
                pCurrent = pCurrent->next;
            }
            if(pCurrent == nullptr){
                // inserting from last index
                tail->next = newNode;
                newNode->prev = tail;
                newNode->next = nullptr;
                tail = newNode;
            }
            else if(pCurrent == head){
                // inserting from first index 
                newNode -> next = head;
                head -> prev = newNode;
                head = newNode;
            }
            else {
                // inserting in the middle
                newNode->next = pCurrent;
                newNode->prev = pCurrent->prev;
                newNode->prev->next = newNode;
                pCurrent->prev = newNode;
            }
        }
    }
    bool DeleteNode(int id){
        Node *newNode = head;
        while(newNode != nullptr && newNode->Data.getId() != id )
            newNode = newNode->next;
        if(!newNode)
            return false;
        else{
            if(newNode == head){
                head = head->next;
                newNode->next = nullptr;
                head->prev = nullptr;
            }
            else if(newNode == tail){
                tail = tail->prev;
                tail->next = nullptr;
                newNode->prev = nullptr;
            }
            else {
                newNode->next->prev = newNode->prev;
                newNode->prev->next = newNode->next;
                newNode->next = nullptr;
                newNode->prev = nullptr;
            }
            return true;
        }
        return false;
    }
    Node *SearchNode(int id){
        Node *newNode = head;
        while(newNode != nullptr && newNode->Data.getId() != id )
            newNode = newNode->next;
        return newNode;
    }
    void DisplayAll(){
        Node *newNode = head;
        while(newNode!= nullptr){
            cout << "ID: " << newNode->Data.getId()
            << ", Name: " << newNode->Data.getName()
                << ", Age: " << newNode->Data.getAge()
                << ", Salary: " << newNode->Data.getSalary()
                << endl;
            newNode = newNode->next;
        }
    }
    int NodeCount(){
        Node *newNode = head;
        int counter = 0;
        while(newNode != nullptr){
            counter++;
            newNode = newNode->next;
        }
        return counter;
    }
};

int main() {
    SortedDoublyLinkedList list;

    cout << "=== INSERT 2 EMPLOYEES ===" << endl;
    list.InsertNode(1);
    list.InsertNode(2);


    cout << "\n=== DISPLAY ALL ===" << endl;
    list.DisplayAll();

    cout << "\n=== SEARCH FOR ID 2 ===" << endl;
    Node* found = list.SearchNode(2);
    if (found)
        cout << "Found: " << found->Data.getName() << endl;
    else
        cout << "Not found" << endl;

    cout << "\n=== DELETE NODE WITH ID 2 ===" << endl;
    if (list.DeleteNode(2))
        cout << "Deleted successfully" << endl;
    else
        cout << "Delete failed" << endl;

    cout << "\n=== DISPLAY ALL AFTER DELETION ===" << endl;
    list.DisplayAll();

    cout << "\n=== NODE COUNT ===" << endl;
    cout << "Total nodes: " << list.NodeCount() << endl;

    cout << "\n=== COPY CONSTRUCTOR TEST ===" << endl;
    SortedDoublyLinkedList copyList(list);
    copyList.DisplayAll();

    cout << "\n=== ASSIGNMENT OPERATOR TEST ===" << endl;
    SortedDoublyLinkedList assignList;
    assignList = list;
    assignList.DisplayAll();

    cout << "\n=== OPERATOR[] TEST (index 0 → ID 1 expected) ===" << endl;
    Node* n = list[0];
    if (n)
        cout << "operator[] returned: " << n->Data.getName() << endl;

    cout << "\n=== DONE ===" << endl;
    return 0;
}
