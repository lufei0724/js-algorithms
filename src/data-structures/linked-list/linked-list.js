class LinkedListNode {
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }

  toString (callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  prepend (value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  append (value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode // Current tail
    this.tail = newNode // New tail
    return this
  }

  find (callback) {
    let node = this.head
    if (!callback) {
      return null
    }

    while (node) {
      if (callback(node.value)) {
        return node
      }
      node = node.next
    }

    return null
  }

  delete (value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.head && this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  deleteTail () {
    if (!this.head) {
      return null
    }

    let deletedNode = null
    let node = this.head
    if (!node.next) {
      deletedNode = this.head
      this.head = null
      this.tail = null
      return deletedNode
    }

    while (node.next !== this.tail) {
      node = node.next
    }
    deletedNode = this.tail
    node.next = null
    this.tail = node

    return deletedNode
  }

  deleteHead () {
    if (!this.head) {
      return null
    }
    let deletedNode = null
    const node = this.head
    if (!node.next) {
      this.head = null
      this.tail = null
    } else {
      this.head = node.next
    }
    deletedNode = node
    return deletedNode
  }

  reverse () {
    if (!this.head) {
      this.head = null
      this.tail = null
      return
    }

    let prevNode = null
    let node = this.head
    let nextNode = node
    this.tail = node
    while (node.next) {
      nextNode = node.next
      node.next = prevNode
      prevNode = node
      node = nextNode
    }
    node.next = prevNode
    this.head = node
  }

  toArray () {
    const nodes = []

    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  toString (callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }
}

module.exports = LinkedList
