#include <iostream>
#include <array>
#include <span>

using namespace std;

int main() {
    array<int, 6> arr = { 1, 2, 3, 4, 5, 6 };

    // Create a span over the entire array
    span<int> s(arr);

    // Split it into two halves
    auto first_half = s.first(s.size() / 2);
    auto second_half = s.last(s.size() / 2);

    // Modify halves
    for (auto& x : first_half) x = 0;
    for (auto& x : second_half) x = 1;

    // Display the modified array
    for (auto i : arr) {
        cout << i << " ";
    }

    return 0;
}
