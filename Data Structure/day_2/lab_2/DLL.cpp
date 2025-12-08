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

class DLL{
    Node *head;
    Node *tail;
    public:
    DLL() : head{nullptr} , tail{nullptr} {}
    ~DLL(){}
    DLL(DLL &other){}
    void AddNode(Employee &Data){
        Node *tempPtr = new Node();
        tempPtr->Data = Data;
        if(!tail){
            head = tail = tempPtr;
            return;
        }
        tempPtr->next = head;
        head->prev = tempPtr;
        tempPtr->prev = nullptr;
        head = tempPtr;
    };
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
    bool DisplayNode(int id){
        Node *ChoosenNode = SearchNode(id);
        if(!ChoosenNode){
            cout << "Node Not Found !" << endl;
            return false;
        }
        cout << "ID: " << ChoosenNode->Data.getId()
            << ", Name: " << ChoosenNode->Data.getName()
                << ", Age: " << ChoosenNode->Data.getAge()
                << ", Salary: " << ChoosenNode->Data.getSalary()
                << endl;
        return true;
    };
    void DisplayAll(){
        Node *newNode = head;
        while(newNode){
            cout << "ID: " << newNode->Data.getId()
            << ", Name: " << newNode->Data.getName()
                << ", Age: " << newNode->Data.getAge()
                << ", Salary: " << newNode->Data.getSalary()
                << endl;
            newNode = newNode->next;
        }
    };
    int NodeCount(){
        Node *newNode = head;
        int counter = 0;
        while(newNode != nullptr){
            counter++;
            newNode = newNode->next;
        }
        return counter;
    }
    Employee* operator[](int index){
        if(index < 0 || index >= NodeCount())
            return nullptr;

        Node* curr = head;
        for(int i = 0; i < index; i++)
            curr = curr->next;

        return &curr->Data;
    }
    DLL operator=(DLL &other){
        if(this != &other){
            this->head = nullptr;
            this->tail = nullptr;

            Node* pCurrent = other.head;
            while (pCurrent) {
                Node* newNode = new Node();
                newNode->Data = pCurrent->Data;
                if (head == nullptr) {
                    head = newNode;
                    tail = newNode;
                } else {
                    newNode->next = head;
                    head->prev = newNode;
                    head = newNode;
                }
                pCurrent = pCurrent->next;
            }
        }
        return *this;
    }
};

int main() {
    DLL list;

    // Create some employees
    Employee e1; 
    e1.setName("Omar"); 
    e1.setAge(22); 
    e1.setSalary(5000);

    Employee e2; 
    e2.setName("Sara"); 
    e2.setAge(30); 
    e2.setSalary(9000);

    Employee e3;  
    e3.setName("Ali");  
    e3.setAge(28); 
    e3.setSalary(7500);

    // Add Employees to the list
    list.AddNode(e1);
    list.AddNode(e2);
    list.AddNode(e3);

    cout << "\n--- Display All Employees ---\n";
    list.DisplayAll();

    // Display one
    cout << "\n--- Display Employee with ID = 2 ---\n";
    list.DisplayNode(2);

    // Delete one
    cout << "\n--- Deleting Employee with ID = 1 ---\n";
    list.DeleteNode(1);

    cout << "\n--- List After Deletion ---\n";
    list.DisplayAll();

    // Count
    cout << "\nTotal Employees = " << list.NodeCount() << endl;

    // Test operator[]
    cout << "\n--- Access using operator[] ---\n";
    Employee* empPtr = list[3];  
    if (empPtr)
        cout << "Index 0 -> Name: " << empPtr->getName() << endl;

    // Test copy constructor
    cout << "\n--- Testing Copy Constructor ---\n";
    DLL listCopy = list;
    listCopy.DisplayAll();

    // Test assignment operator
    cout << "\n--- Testing Assignment Operator ---\n";
    DLL listAssigned;
    listAssigned = list;
    listAssigned.DisplayAll();

    return 0;
}


