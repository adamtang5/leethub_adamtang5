class Solution {
  public int[] plusOne(int[] digits) {
    if (digits[digits.length - 1] < 9) {
      digits[digits.length - 1]++;
      return digits;
    } else {
      List<Integer> dList = new ArrayList<Integer>();
      for (int n : digits) {
        dList.add(n);
      }
      Collections.reverse(dList);
      int i = 0;
      int carry = 1;
      while (i < dList.size()) {
        int value = dList.get(i) + carry;
        if (value > 9) {
          dList.set(i, 0);
          carry = 1;
          i++;
        } else {
          dList.set(i, value);
          carry = 0;
          break;
        }
      }
      if (carry == 1) dList.add(carry);
      Collections.reverse(dList);
      int[] ans = dList.stream().mapToInt(j->j).toArray();
      return ans;
    }
  }
}