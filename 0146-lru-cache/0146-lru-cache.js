/**
 * @param {number} key
 * @param {number} val
 */
var Node = function(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.size = 0;
  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  this.left.next = this.right;
  this.right.prev = this.left;
};

/** 
 * @param {Node} node
 * @return {void}
 */
LRUCache.prototype.remove = function(node) {
  const [prev, next] = [node.prev, node.next];
  prev.next = next;
  next.prev = prev;
  this.size--;
};

/** 
 * @param {Node} node
 * @return {void}
 */
LRUCache.prototype.insert = function(node) {
  const [prev, next] = [this.right.prev, this.right];
  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
  this.size++;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (key in this.cache) {
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].val;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (key in this.cache) this.remove(this.cache[key]);
  this.cache[key] = new Node(key, value);
  this.insert(this.cache[key]);
  
  if (this.size > this.capacity) {
    const lru = this.left.next;
    this.remove(lru);
    delete this.cache[lru.key];
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */