class Solution {
  public int candy(int[] ratings) {
    int[] ans = new int[ratings.length];
    for (int i = 0; i < ans.length; i++) ans[i] = 1;
    
    for (int i = 0; i < ratings.length - 1; i++) {
      if (ratings[i + 1] > ratings[i]) ans[i + 1] = ans[i] + 1;
    }
    
    for (int i = ratings.length - 1; i >= 1; i--) {
      if (ratings[i - 1] > ratings[i]) ans[i - 1] = Math.max(ans[i - 1], ans[i] + 1);
    }
    
    return IntStream.of(ans).sum();
  }
}