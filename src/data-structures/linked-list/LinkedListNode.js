export default class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  /**
   * @param {function} [callback]
   * @returns {string}
   */
  toString(callback) {
    return callback ? callback(this.value) : this.value.toString();
  }
}
