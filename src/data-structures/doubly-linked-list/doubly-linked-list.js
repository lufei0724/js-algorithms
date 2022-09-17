class LinkedListNode {
  constructor (value, pre = null, next = null) {
    this.value = value
    this.pre = pre
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  append (value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }
    this.tail.next = newNode
    newNode.pre = this.tail
    this.tail = newNode
    return this
  }

  prepend (value) {
    const newNode = new LinkedListNode(value)
    if (this.head) {
      this.head.pre = newNode
    }
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    newNode.next = this.head
    return this
  }

  remove (value) {
    if (!this.head) {
      return false
    }
    if (this.head.value === value) {
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.pre = null
      }
      return true
    }
    let node = this.head.next
    while (!node && node.value !== value) {
      node = node.next
    }
    if (node) {
      node.next.pre = node.prev
      node.pre.next = node.next
      return true
    }
    return false
  }
}

module.exports = LinkedList
