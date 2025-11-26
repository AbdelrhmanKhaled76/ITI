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

    BankAccount(string name, double initialBalance) {
        accountHolder = name;
        balance = initialBalance;
        counter++;
    }

    BankAccount& deposit(double amount) {
        if(amount > 0) {
            balance += amount;
        } else {
            cout << "Deposit amount must be positive!" << endl;
        }
        return *this;
    }

    BankAccount& withdraw(double amount) {
        if(amount > 0 && amount <= balance) {
            balance -= amount;
        } else if(amount > balance) {
            cout << "Insufficient balance!" << endl;
        } else {
            cout << "Withdrawal amount must be positive!" << endl;
        }
        return *this;
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
};

int BankAccount::nextID = 1001;
int BankAccount::counter = 0;

int main() {
    BankAccount account1("Alice", 500.0);
    BankAccount account2;

    account1.deposit(200).deposit(300);
    cout << "Account 1 balance after deposits: $" << account1.getBalance() << endl; 
    account1.withdraw(150);
    cout << "Account 1 balance after withdrawal: $" << account1.getBalance() << endl;

    account2.deposit(1000).deposit(300);
    cout << "Account 2 balance after deposits: $" << account2.getBalance() << endl; 
    account2.withdraw(50);
    cout << "Account 2 balance after withdrawal: $" << account2.getBalance() << endl;

    cout << "Account 1 info:" << endl;
    account1.showAccount();
    cout << endl;

    cout << "Account 2 info:" << endl;
    account2.showAccount();
    cout << endl;

    BankAccount::showCounter();

    return 0;
}
