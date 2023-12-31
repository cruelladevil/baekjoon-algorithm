#include <algorithm>
#include <iostream>

const int MAX_COL = 3;

int main() {
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(nullptr);

  int dp_max[2][MAX_COL] = {0};
  int dp_min[2][MAX_COL] = {0};
  int i = 0;
  int n;

  std::cin >> n;

  for (int row = 0; row < n; row += 1) {
    for (int col = 0; col < MAX_COL; col += 1) {
      int num;

      std::cin >> num;

      int begin = col - 1 < 0 ? 0 : col - 1;
      int end = col + 2 > MAX_COL ? MAX_COL : col + 2;

      dp_max[i][col] = num + *std::max_element(dp_max[1 - i] + begin, dp_max[1 - i] + end);
      dp_min[i][col] = num + *std::min_element(dp_min[1 - i] + begin, dp_min[1 - i] + end);
    }

    i = 1 - i;
  }

  int* max = std::max_element(dp_max[1 - i], dp_max[1 - i] + MAX_COL);
  int* min = std::min_element(dp_min[1 - i], dp_min[1 - i] + MAX_COL);

  std::cout << *max << ' ' << *min;
}
