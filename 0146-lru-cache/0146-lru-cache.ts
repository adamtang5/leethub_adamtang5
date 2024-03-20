class Node {
  key: number = 0
  val: number = 0
  prev: Node = null
  next: Node = null
  
  constructor(key: number, val: number) {
    this.key = key
    this.val = val
  }
}

class LRUCache {
  capacity: number = 0
  cache = {}
  size: number = 0
  left: Node = new Node(0, 0)
  right: Node = new Node(0, 0)

  constructor(capacity: number) {
    this.capacity = capacity
    this.left.next = this.right
    this.right.prev = this.left
  }
  
  remove(node: Node): void {
    const prev: Node = node.prev
    const next: Node = node.next
    prev.next = next
    next.prev = prev
    this.size--
  }

  insert(node: Node): void {
    const prev: Node = this.right.prev
    const next: Node = this.right
    prev.next = node
    next.prev = node
    node.next = next
    node.prev = prev
    this.size++
  }

  get(key: number): number {
    if (key in this.cache) {
      this.remove(this.cache[key])
      this.insert(this.cache[key])
      return this.cache[key].val
    }
    return -1
  }

  put(key: number, value: number): void {
    if (key in this.cache) this.remove(this.cache[key])
    this.cache[key] = new Node(key, value)
    this.insert(this.cache[key])
    
    if (this.size > this.capacity) {
      const lru = this.left.next
      this.remove(lru)
      delete this.cache[lru.key]
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */