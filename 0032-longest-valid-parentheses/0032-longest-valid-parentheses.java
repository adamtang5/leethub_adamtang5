class Solution {
  public int longestValidParentheses(String s) {
    if (s.length() < 2) return 0;
    Map dp = new HashMap();
    char curr;
    char prev;
    char prevValid;
    int prevValidIdx;
    char prePrevValid;
    for (int i = 0; i < s.length(); i++) {
      curr = s.charAt(i);
      prev = i - 1 >= 0 ? s.charAt(i - 1) : '|';
      prevValidIdx = i - 1 - (int) dp.getOrDefault(i - 1, 0);
      prevValid = prevValidIdx >= 0 ? s.charAt(prevValidIdx) : '|';
      prePrevValid = prevValidIdx - 1 >= 0 ? s.charAt(prevValidIdx - 1) : '|';
      if (curr == ')' && prev == '(') {
        dp.put(i, (int) dp.getOrDefault(i - 2, 0) + 2);
      } else if (curr == ')' && prev == ')' && prevValid == '(') {
        int val = (int) dp.getOrDefault(i - 1, 0) + (int) dp.getOrDefault(prevValidIdx - 1, 0) + 2;
        dp.put(i, val);
      }
    }
    List<Integer> vals = new ArrayList<Integer>(dp.values());
    Collections.sort(vals);
    return vals.size() == 0 ? 0 : vals.get(vals.size() - 1);
  }
}