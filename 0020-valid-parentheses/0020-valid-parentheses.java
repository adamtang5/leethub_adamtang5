class Solution {
  public boolean isValid(String s) {
    List<String> stack = new ArrayList<String>();
    Map open = new HashMap();
    open.put(")", "(");
    open.put("]", "[");
    open.put("}", "{");
    
    for (int i = 0; i < s.length(); i++) {
      String p = s.substring(i, i + 1);
      if (open.containsValue(p)) {
        stack.add(p);
      } else {
        if (stack.isEmpty()) return false;
        String popped = stack.get(stack.size() - 1);
        if (!popped.equals(open.get(p))) {
          return false;
        } else {
          stack.remove(stack.size() - 1);
        }
      }
    }
    return stack.isEmpty();
  }
}