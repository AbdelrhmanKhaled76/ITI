#include <algorithm>
#include <iostream>
#include <vector>
#include <map>
#include <bitset>
#include <string>
using namespace std;
#define Abdelrhman76 ios_base::sync_with_stdio(0),cin.tie(0),cout.tie(0);

// void solution() {
    
// }

class Solution {
public:
    int binaryGap(int n) {
        string s = bitset<8>(n).to_string();
        bool firstOne = false;
        int counter = 0, lilCounter = 0;
        for(int i =0; i < s.length(); i++){
            if(s[i] == '1'){
                if(firstOne){
                    counter = max(counter ,++lilCounter);
                    firstOne = false;
                }
                else{
                    firstOne = true;
                }
            }
            else if(firstOne) {
                lilCounter++;
            }
        }
        return counter;
    }
};

int main()
{
    Abdelrhman76
    // int t;
    // cin >> t;
    // while (t--) {
    //     solution();
    // }
    Solution sol;
    cout << sol.binaryGap(5) << endl;
    return 0;
}
