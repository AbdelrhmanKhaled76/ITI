#include <iostream>
#include <array>

using namespace std;

struct Subject
{
  float grade; 
};

struct Student
{
    string name;
    int age;
    array<Subject, 5> subjects;
};


int main() {
    array<Student, 3> students;
    for(int i = 0; i < students.size(); i++)
    {
        cout << "Enter name of student " << i + 1 << ": ";
        cin >> students[i].name;
        cout << "Enter age of student " << i + 1 << ": ";
        cin >> students[i].age;

        for(int j = 0; j < students[i].subjects.size(); j++)
        {
            cout << "Enter grade for subject " << j + 1 << ": ";
            cin >> students[i].subjects[j].grade;
        }
        cout << endl;
    }

    cout << endl;
    cout << "\nStatistics" << endl;

    float sum = 0, avg = 0;

    for(int i = 0; i < students.size(); i++)
    {
        for(int j = 0; j < students[i].subjects.size(); j++)
        {
            sum += students[i].subjects[j].grade;
        }
    }
    avg = sum / 5;

    cout << "the sum of the students grade : " << sum << endl;

    cout << "Average grade of student : " << avg << endl;

    return 0;
}