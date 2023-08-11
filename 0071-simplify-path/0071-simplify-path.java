class Solution {
  public String simplifyPath(String path) {
    String[] names = path.split("/");
    Stack<String> stack = new Stack<String>();
    for (String name : names) {
      if (name.equals("..")) {
        if (!stack.empty()) stack.pop();
      } else if (!name.equals("") && !name.equals(".")) {
        stack.push(name);
      }
    }
    String ans = "";
    Iterator value = stack.iterator();
    while (value.hasNext()) {
      ans += "/";
      ans += value.next();
    }
    return ans.length() > 0 ? ans : "/";
  }
}