#include <iostream>

using namespace std;

int sum(int num1 ,int num2){
    return num1 + num2;
};

int sum(int num1 ,int num2, int num3){
    return num1 + num2 + num3;
}

int main()
{
    int num1,num2,num3;
    cout << "enter the three numbers for the equation : ";
    cin >> num1 >> num2 >> num3;
    cout << "this is the sum for 2 numbers function : " << sum(num1,num2) << endl;

    cout << "this is the sum for 3 numbers  function : " << sum(num1,num2,num3) << endl;
    return 0;
}
