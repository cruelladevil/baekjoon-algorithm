#include <iostream>

int main() {
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(nullptr);

  const std::string ADD = "add";
  const std::string REMOVE = "remove";
  const std::string CHECK = "check";
  const std::string TOGGLE = "toggle";
  const std::string ALL = "all";
  const std::string EMPTY = "empty";

  int m;
  int val;
  int bit = 0;
  std::string action;

  std::cin >> m;

  for (int i = 0; i < m; i += 1) {
    std::cin >> action;

    if (action == ADD) {
      std::cin >> val;

      bit |= (1 << val);
    } else if (action == REMOVE) {
      std::cin >> val;

      bit &= ~(1 << val);
    } else if (action == CHECK) {
      std::cin >> val;

      if (bit & (1 << val)) {
        std::cout << 1 << '\n';
      } else {
        std::cout << 0 << '\n';
      }
    } else if (action == TOGGLE) {
      std::cin >> val;

      bit ^= (1 << val);
    } else if (action == ALL) {
      bit = (1 << 21) - 1;
    } else if (action == EMPTY) {
      bit = 0;
    }
  }
}
