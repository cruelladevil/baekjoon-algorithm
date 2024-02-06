#include <iostream>
#include <queue>

int main() {
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(nullptr);

  std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
  int n;

  std::cin >> n;

  for (int row = 0; row < n; row += 1) {
    for (int col = 0; col < n; col += 1) {
      int num;

      std::cin >> num;

      pq.push(num);
    }

    while (pq.size() > n) {
      pq.pop();
    }
  }

  std::cout << pq.top();
}
