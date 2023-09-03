class Solution {
  public List<Integer> bitSeq(int n) {
    if (n == 1) {
      List<Integer> ans = new ArrayList<Integer>();
      ans.add(0);
      ans.add(0);
      return ans;
    }
    
    List<Integer> lastSeq = bitSeq(n - 1);
    lastSeq.set(lastSeq.size() - 1, n - 1);
    List<Integer> ans = new ArrayList<Integer>();
    ans.addAll(lastSeq);
    ans.addAll(lastSeq);
    return ans;
  }
  
  public List<Integer> grayCode(int n) {
    List<Integer> seq = bitSeq(n);
    List<Integer> ans = new ArrayList<Integer>();
    int nthPower = (int) Math.pow(2, n);
    for (int i = 0; i < nthPower; i++) {
      ans.add(0);
    }
    for (int i = 0; i < ans.size() - 1; i++) {
      int val = (int) ans.get(i) ^ (1 << (n - 1 - (int) seq.get(i)));
      ans.set(i + 1, val);
    }
    return ans;
  }
}