import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toString() {
    return this.toArray().map((n) => n.toString()).join(',');
  }

  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }

  append(value) {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  prepend(value) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  delete(value) {
    while (this.head && this.head.value === value) {
      this.deleteHead();
    }

    let node = this.head;
    if (node !== null) {
      while (node.next) {
        if (node.next.value === value) {
          node.next = node.next.next;
        } else {
          node = node.next;
        }
      }
    }

    this.tail = node;
    return this;
  }

  deleteHead() {
    if (!this.head) return this;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    const newNode = new LinkedListNode(value);
    let currentNode = this.head;
    if (!currentNode) {
      this.prepend(value);
      return this;
    }

    let count = 1;
    while (currentNode.next) {
      if (count === index) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
      count += 1;
    }
    if (count < index) {
      this.append(newNode);
    }
    return this;
  }
}
