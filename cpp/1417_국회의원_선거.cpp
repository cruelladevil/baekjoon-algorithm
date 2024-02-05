#include <iostream>
#include <queue>

int main() {
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(nullptr);

  std::priority_queue<int> pq;
  int n;
  int dasomCount;

  std::cin >> n >> dasomCount;

  for (int i = 1; i < n; i += 1) {
    int voteCount;

    std::cin >> voteCount;

    pq.push(voteCount);
  }

  int buyCount = 0;

  while (!pq.empty()) {
    int currCount = pq.top();
    pq.pop();

    if (dasomCount <= currCount) {
      buyCount += 1;
      dasomCount += 1;
      pq.push(currCount - 1);
    }
  }

  std::cout << buyCount;
}
