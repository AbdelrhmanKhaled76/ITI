#include <algorithm>
#include <iostream>
#include <vector>
#include <map>
using namespace std;
#define Abdelrhman76 ios_base::sync_with_stdio(0),cin.tie(0),cout.tie(0);

void solution() {
    vector<int> nums(4);
    
    for (int i = 0; i < 4; i++) {
        cin >> nums[i];
    }
    int winner1 = (nums[0] > nums[1]) ? nums[0] : nums[1];
    int winner2 = (nums[2] > nums[3]) ? nums[2] : nums[3];
    sort(nums.begin(), nums.end());
    if ((winner1 == nums[2] && winner2 == nums[3]) || (winner2 == nums[2] && winner1 == nums[3]))
        cout << "YES" << endl;
    else
        cout << "NO" << endl;
}

int main()
{
    Abdelrhman76
    int t;
    cin >> t;
    while (t--) {
        solution();
    }
    return 0;
}
