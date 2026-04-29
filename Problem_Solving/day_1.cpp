#include <algorithm>
#include <iostream>
#include <vector>
#include <map>
#include <bitset>
#include <string>
using namespace std;
#define Abdelrhman76 ios_base::sync_with_stdio(0),cin.tie(0),cout.tie(0);

<<<<<<< HEAD
void solution() {
    int size,index = -1;
    cin >> size;
    int arr[size];
    for(int i=0; i < size; i++){
        cin >> arr[i];
    }
    int pattern = arr[1] - arr[0];
    for(int i = 0;i < size; i++){
        if(i != size - 1 && arr[i+1] - arr[i] != pattern)
        {
            index = i+1;
            break;
        }
    }
    cout << index + 1 << endl;
}
=======
// void solution() {
    
// }

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        bool isTwice = false;
        int tracker = nums.size() - 1;
        if(nums.size() == 0) return 0;
        for (int i = 1; i < nums.size(); i++)
        {
            if(nums[i] == nums[i-1] && isTwice){
                swap(nums[i--], nums[tracker--]);
            }
            else if(nums[i] == nums[i-1]){
                isTwice = true;
            }
            else {
                isTwice = false;
            }
        }
        return tracker+1;
    }
};
>>>>>>> 91995450ff5ca5ef7f33f9bd5fc2ecc694fa2628

int main()
{
    Abdelrhman76
    // int t;
    // cin >> t;
    // while (t--) {
<<<<<<< HEAD
        solution();
    // }
=======
    //     solution();
    // }
    Solution sol;
    vector <int> nums({1,1,1,2,2,3});
    cout << sol.removeDuplicates(nums) << endl;
>>>>>>> 91995450ff5ca5ef7f33f9bd5fc2ecc694fa2628
    return 0;
}
