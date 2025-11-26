#include <iostream>
#include <string>

using namespace std;

class BankAccount {
private:
    string accountHolder = "unknown";
    int accountNumber = nextID++;
    double balance = 0.0;

    // Static members
    static int nextID;
    static int counter;

public:
    BankAccount() = default;

    BankAccount(const string& name, double initialBalance) {
        accountHolder = name;
        balance = initialBalance;
        counter++;
    }

    // copy constructor
    BankAccount(BankAccount &other) {
        accountHolder = other.accountHolder;
        balance = other.balance;
        accountNumber = nextID;
        counter++;
    };

    // move constructor
    BankAccount(BankAccount &&other)  {
        accountHolder = move(other.accountHolder);
        balance = other.balance;
        accountNumber = other.accountNumber;
        other.balance = 0.0;
        other.accountHolder = "unknown";
        other.accountNumber = 0;
        counter++;
    };

    BankAccount &operator= (BankAccount &) = delete;
    BankAccount &operator= (BankAccount &&) = delete;


    BankAccount& deposit(double amount) {
        if(amount > 0) {
            balance += amount;
        } else {
            cout << "Deposit amount must be positive!" << endl;
        }
        return *this;
    }

    void withdraw(double amount) {
        if(amount > 0 && amount <= balance) {
            balance -= amount;
        } else if(amount > balance) {
            cout << "Insufficient balance!" << endl;
        } else {
            cout << "Withdrawal amount must be positive!" << endl;
        }
    }

    void showAccount() {
        cout << "Account Holder: " << accountHolder << endl;
        cout << "Account Number: " << accountNumber << endl;
        cout << "Balance: $" << balance << endl;
    }

    double getBalance() {
        return balance;
    }

    static void showCounter() {
        cout << "Total accounts created: " << counter << endl;
    }
    // Friend operators
    friend ostream& operator<<(ostream &out,  BankAccount &account);
    friend istream& operator>>(istream &in, BankAccount &account);
};

// Correct operator<<
ostream& operator<<(ostream &out,  BankAccount &account) {
    out << "Account Holder: " << account.accountHolder << endl;
    out << "Account Number: " << account.accountNumber << endl;
    out << "Balance: $" << account.balance << endl;
    return out;
}

// Correct operator>>
istream& operator>>(istream &in, BankAccount &account) {
    cout << "Enter account holder name: ";
    in >> account.accountHolder;
    cout << "Enter initial balance: ";
    in >> account.balance;
    return in;
}


int BankAccount::nextID = 1001;
int BankAccount::counter = 0;

int main() {
    cout << "--- Creating account1 with name and initial balance ---\n";
    BankAccount account1("Alice", 500.0);
    cout << account1 << endl;

    cout << "--- Creating default account2 ---\n";
    BankAccount account2;
    cout << account2 << endl;

    cout << "--- Testing deposit chaining and withdraw ---\n";
    account1.deposit(200).deposit(300); // deposit 200 then 300
    account1.withdraw(150);             // withdraw 150
    cout << "account1 after transactions:\n" << account1 << endl;

    account2.deposit(1000).withdraw(50);
    cout << "account2 after transactions:\n" << account2 << endl;

    cout << "--- Using copy constructor to create account3 from account1 ---\n";
    BankAccount account3(account1);  // copy constructor
    cout << account3 << endl;

    cout << "--- Using move constructor to create account4 from account2 ---\n";
    BankAccount account4(move(account2)); // move constructor
    cout << "account4 info:\n" << account4 << endl;
    cout << "account2 after move:\n" << account2 << endl; // should be reset

    cout << "--- Reading account5 info from user ---\n";
    BankAccount account5;
    cin >> account5;
    cout << "account5 info:\n" << account5 << endl;

    cout << "--- Current total accounts created ---\n";
    BankAccount::showCounter();

    return 0;
}
