function recurisive_combination(n, m) {
  combination_result = 0;
  if (m == 0 || m == n) {
    combination_result = 1;
  } else {
    combination_result =
      recurisive_combination(n - 1, m) + recurisive_combination(n - 1, m - 1);
  }
  return combination_result;
}
console.log(recurisive_combination(4, 2));
// 6
