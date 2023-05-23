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
        System.out.println(stack);
        if (stack.isEmpty()) return false;
        String popped = stack.get(stack.size() - 1);
        System.out.println(popped);
        System.out.println(p);
        System.out.println(open.get(p));
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