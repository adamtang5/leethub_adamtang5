class AuxPlate {
  private int i;
  private int s;
  private int h;
  
  public AuxPlate(int i, int s, int h) {
    this.i = i;
    this.s = s;
    this.h = h;
  }
  
  public int getI() {
    return i;
  }
  
  public int getS() {
    return s;
  }
  
  public int getH() {
    return h;
  }
  
  public void setI(int i) {
    this.i = i;
  }
  
  public void setS(int s) {
    this.s = s;
  }
}

class Solution {
  public int largestRectangleArea(int[] heights) {
    int ans = 0;
    List<AuxPlate> stack = new ArrayList<AuxPlate>();
    AuxPlate init = new AuxPlate(0, 0, heights[0]);
    stack.add(init);
    AuxPlate p;
    for (int i = 1; i < heights.length; i++) {
      if (heights[i] <= stack.get(stack.size() - 1).getH()) {
        p = stack.remove(stack.size() - 1);
        ans = Math.max(ans, (p.getI() - p.getS() + 1) * p.getH());
        while (!stack.isEmpty() && stack.get(stack.size() - 1).getH() >= heights[i]) {
          stack.get(stack.size() - 1).setI(p.getI());
          p = stack.remove(stack.size() - 1);
          ans = Math.max(ans, (p.getI() - p.getS() + 1) * p.getH());
        }
        stack.add(new AuxPlate(i, p.getS(), heights[i]));
      } else {
        stack.add(new AuxPlate(i, i, heights[i]));
      }
    }
    while (!stack.isEmpty()) {
      p = stack.remove(stack.size() - 1);
      ans = Math.max(ans, (p.getI() - p.getS() + 1) * p.getH());
      if (!stack.isEmpty()) stack.get(stack.size() - 1).setI(p.getI());
    }
    return ans;
  }
}