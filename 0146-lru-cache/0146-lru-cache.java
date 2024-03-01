public class Node {
  protected int key;
  protected int val;
  protected Node prev;
  protected Node next;
  
  public Node(int key, int val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  protected int capacity;
  protected Map<Integer, Node> cache;
  protected Node left;
  protected Node right;
  
  public LRUCache(int capacity) {
    this.capacity = capacity;
    this.cache = new HashMap<Integer, Node>();
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  public void remove(Node node) {
    Node prev = node.prev;
    Node next = node.next;
    prev.next = next;
    next.prev = prev;
  }
  
  public void insert(Node node) {
    Node prev = this.right.prev;
    Node next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  public int get(int key) {
    if (this.cache.containsKey(key)) {
      remove(this.cache.get(key));
      insert(this.cache.get(key));
      return this.cache.get(key).val;
    }
    return -1;
  }

  public void put(int key, int value) {
    if (this.cache.containsKey(key)) remove(this.cache.get(key));
    this.cache.put(key, new Node(key, value));
    insert(this.cache.get(key));
    
    if (this.cache.size() > this.capacity) {
      Node lru = this.left.next;
      remove(lru);
      this.cache.remove(lru.key);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */