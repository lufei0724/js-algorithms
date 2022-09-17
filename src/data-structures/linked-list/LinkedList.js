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
}
