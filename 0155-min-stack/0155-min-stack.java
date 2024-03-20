public class Node {
  protected int val;
  protected int min;
  
  public Node(int val) {
    this.val = val;
  }
}

class MinStack {
  protected List<Node> stack;

  public MinStack() {
    this.stack = new ArrayList<Node>();
  }

  public void push(int val) {
    Node newNode = new Node(val);
    if (this.stack.isEmpty() || getMin() > val) {
      newNode.min = val;
    } else {
      newNode.min = getMin();
    }
    this.stack.add(newNode);
  }

  public void pop() {
    this.stack.remove(this.stack.size() - 1);
  }

  public int top() {
    return this.stack.get(this.stack.size() - 1).val;
  }

  public int getMin() {
    return this.stack.get(this.stack.size() - 1).min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */