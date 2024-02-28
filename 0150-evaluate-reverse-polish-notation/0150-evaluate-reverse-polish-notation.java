class Solution {
  public int evalRPN(String[] tokens) {
    List<Integer> stack = new ArrayList<Integer>();
    int first;
    int second;
    int result = 0;
    for (String token : tokens) {
      if ("+-*/".contains(token)) {
        second = stack.remove(stack.size() - 1);
        first = stack.remove(stack.size() - 1);
        if (token.equals("+")) {
          result = first + second;
        } else if (token.equals("-")) {
          result = first - second;
        } else if (token.equals("*")) {
          result = first * second;
        } else if (token.equals("/")) {
          int sign = 1;
          if (first >= 0 && second < 0) sign = -1;
          if (second >= 0 && first < 0) sign = -1;
          result = Math.abs(first) / Math.abs(second) * sign;
        }
        stack.add(result);
      } else {
        stack.add(Integer.parseInt(token));
      }
    }
    return stack.get(0);
  }
}