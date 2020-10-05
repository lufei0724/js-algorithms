class LinkedListNode {
  constructor(value, next = null) {
    this.vaule = value
    this.next = next 
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  append(value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode  //Current tail
    this.tail = newNode       //New tail
    return this
  }

  delete(value) {
    if (!this.head) {
      return false
    }
    let node = this.head
    if (node.value === value) {
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
      }
      return true
    }
    while (!node.next && node.next.value !== value) {
      node = node.next
    }
    if (node.next) {
      if (node.next === tail) {
        tail = node
      }
      node.next = node.next.next
      return true
    }
    return false
  }
}