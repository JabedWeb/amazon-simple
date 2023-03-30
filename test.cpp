#include <iostream>
#include <algorithm>
using namespace std;

const int MAXN = 6;
int grid[MAXN][MAXN], dp[MAXN][MAXN];

int main() {
    // Read in the input grid
    for (int i = 0; i < MAXN; i++) {
        for (int j = 0; j < MAXN; j++) {
            cin >> grid[i][j];
        }
    }

    // Initialize the DP table
    for (int i = 0; i < MAXN; i++) {
        dp[0][i] = grid[0][i];
    }

    // Fill in the DP table
    for (int i = 1; i < MAXN; i++) {
        for (int j = 0; j < MAXN; j++) {
            int left = max(0, j-1);
            int right = min(MAXN-1, j+1);
            for (int k = left; k <= right; k++) {
                dp[i][j] = max(dp[i][j], dp[i-1][k] + grid[i][j]);
            }
        }
    }

    // Find the highest and lowest totals
    int highest = 0, lowest = 1e9;
    for (int j = 0; j < MAXN; j++) {
        highest = max(highest, dp[MAXN-1][j]);
        lowest = min(lowest, dp[MAXN-1][j]);
    }

    // Output the results
    cout << "The highest total is " << highest << endl;
    cout << "The lowest total is " << lowest << endl;

    return 0;
}
