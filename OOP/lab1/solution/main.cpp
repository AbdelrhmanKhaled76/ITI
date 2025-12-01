#include <iostream>

int main()
{
    //first task
    std::cout << " my name is Abdelrhman khaled mohamed " << " i'm 22 years old " << " i live in cairo " << std::endl;

    //second task
    int num1,num2;
    std::cout << "enter two numbers for the equation" << std::endl;
    std::cin >> num1 >> num2;
    std::cout << "the addition is : " << num1 + num2 << std::endl;
    std::cout << "the subtraction is :  " << num1 - num2 << std::endl;
    std::cout << "the average of both numbers is " << (num1 + num2) / 2.0  << std::endl;

    //third task
    int num;
    std::cout << "enter a number for the conversion" << std::endl;
    std::cin >> num;
    std::cout << "the conversion to hexadecimal is : " << std::hex << num << std::endl;
    std::cout << "the conversion to octal is : " << std::oct << num << std::endl;
    std::cout << std::dec;

    // last task
    char c;
    std::cout << "enter a character to display it's ASCII" << std::endl;
    std::cin >> c;
    std::cout << "The ASCII code of " << c << " is " << int(c) << std::endl;
    return 0;
}
