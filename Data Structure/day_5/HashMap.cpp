#include <iostream>
#include<vector>
#include<list>
#include<functional>
#include<algorithm>
#include<queue>

using namespace std;

struct Employee
{
    int ID ;
    string Name ;
    int age;
    int salary;
};

template<class KeyType , class ValueType>
class MapEntry
{
    KeyType Key ;  
    ValueType Value ; 

public :

    MapEntry(KeyType _Key , ValueType _Value) {Key = _Key; Value = _Value;}

    KeyType GetKey () const { return Key;}
    ValueType GetValue() const { return Value;}
};

template<class KeyType , class ValueType>
class HashTable
{
    vector<list<MapEntry<KeyType,ValueType>>> theLists;
    int currentSize ;

public:
    explicit HashTable (int Size = 101) : theLists(Size)  {currentSize = 0;}

    bool Contains (const KeyType & x) const
    {
        int WhichList = MyHashFunction(x);

        ///O(1) Const Time
        const auto& Bucket = theLists[WhichList]; /// Double Linked List , List x May be in it

        ///Manually Loop through each double Linked List Nodes , till x is found - O(N)
        auto itr = Bucket.begin();

        while(itr != Bucket.end())
        {
            if (itr->GetKey() == x)
                return true;
            itr++; ///pCurrent = pCurrent ->pNext;
        }
        return false;
    }

    bool Insert (const KeyType& X , const ValueType& Y)
    {
        if (Contains(X)) return false;

        int WhichList = MyHashFunction(X);

        theLists[WhichList].push_back(MapEntry<KeyType,ValueType>(X,Y));

        currentSize++;

        ///Check Load Factor : currentSize / theLists.size , > 0.7 rehashing (increase Vector Size By 2 , rehash All existing object )
        if(currentSize > theLists.size() * 0.7)
            Rehash();
        return true;
    }

    bool Remove(const KeyType& X)
    {
        if (!Contains(X)) return false;

        int WhichList = MyHashFunction(X);

        auto& bucket = theLists[WhichList];

        for (auto itr = bucket.begin(); itr != bucket.end(); ++itr)
        {
            if (itr->GetKey() == X)
            {
                bucket.erase(itr);
                currentSize--;
                return true;
            }
        }
        return false;
    }

    void MakeEmpty ()
    {
        for (list<MapEntry<KeyType,ValueType>> & lst : theLists)  lst.clear();
        currentSize = 0;
    }

    void Rehash()
    {
        auto oldLists = theLists;

        MakeEmpty();
        theLists.resize(oldLists.size() * 2);

        currentSize = 0;

        for (const auto& lst : oldLists)
        {
            for (const auto& entry : lst)
            {
                Insert(entry.GetKey(), entry.GetValue());
            }
        }
    }

    ValueType LookUP(const KeyType& key) const
    {
        int WhichList = MyHashFunction(key);
        const auto& bucket = theLists[WhichList];

        for (const auto& entry : bucket)
        {
            if (entry.GetKey() == key)
                return entry.GetValue();
        }

        throw runtime_error("Key not found");
    }


protected:
    int MyHashFunction (const KeyType& x)const
    {
        hash<KeyType> hashFunction ;

        int InitialHashValue = hashFunction(x);

        return  InitialHashValue %  theLists.size();
    }
};
int main()
{
    HashTable<int, Employee> employees;

    // Insert employees
    employees.Insert(1, {1, "Ahmed", 25, 5000});
    employees.Insert(2, {2, "Ali", 30, 6000});
    employees.Insert(3, {3, "Mohamed", 35, 7000});

    cout << "Contains ID 2? " << employees.Contains(2) << endl;

    // Lookup
    Employee e = employees.LookUP(3);
    cout << "Found: " << e.Name << ", salary = " << e.salary << endl;
    


    // Duplicate insert test
    cout << "Insert duplicate ID 2: "
         << employees.Insert(2, {2, "Ali", 30, 6000}) << endl;

    // Remove
    cout << "Remove ID 2: " << employees.Remove(2) << endl;
    cout << "Contains ID 2? " << employees.Contains(2) << endl;

    // Trigger rehash (small initial size)
    HashTable<int, Employee> smallTable(3);

    for (int i = 1; i <= 10; ++i)
    {
        smallTable.Insert(i, {i, "Emp" + to_string(i), 20 + i, 3000 + i * 100});
    }

    cout << "\nRehash test completed (inserted 10 elements into size-3 table)" << endl;

    // MakeEmpty
    employees.MakeEmpty();
    cout << "After MakeEmpty, contains ID 1? "
         << employees.Contains(1) << endl;

    return 0;
}
