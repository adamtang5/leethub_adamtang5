class Node {
  val: number
  min: number
  
  constructor(val: number) {
    this.val = val
  }
}

class MinStack {
  stack: Node[] = []

  constructor() {
    
  }

  push(val: number): void {
    const newNode: Node = new Node(val)
    if (!this.stack.length || this.getMin() > val) {
      newNode.min = val
    } else {
      newNode.min = this.getMin()
    }
    this.stack.push(newNode)
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1].val
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */