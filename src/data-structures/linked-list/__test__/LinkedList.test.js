import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('2');
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);

    linkedList.prepend(1);
    linkedList.prepend(2);

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('1');
    expect(linkedList.toString()).toBe('2,1');
  });

  describe('when delete head', () => {
    it('should delete head from linked list', () => {
      const linkedList = new LinkedList();

      linkedList.prepend(1);
      linkedList.prepend(2);
      linkedList.append(3);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('2,1,3');

      linkedList.deleteHead();
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('1,3');
    });

    it('should return empty linked list given the linked list only has one node', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('1');
      expect(linkedList.toString()).toBe('1');

      linkedList.deleteHead();
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.toString()).toBe('');
    });

    it('should return empty linked list given the linked list is empty', () => {
      const linkedList = new LinkedList();
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.toString()).toBe('');

      linkedList.deleteHead();
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.toString()).toBe('');
    });
  });

  describe('when delete node', () => {
    it('should delete node from linked list', () => {
      const linkedList = new LinkedList();

      linkedList.prepend(1);
      linkedList.prepend(2);
      linkedList.append(3);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('2,1,3');

      linkedList.delete(1);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('2,3');
    });

    it('should delete head from linked list given the head is equal the value to be deleted', () => {
      const linkedList = new LinkedList();

      linkedList.prepend(1);
      linkedList.prepend(2);
      linkedList.append(3);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('2,1,3');

      linkedList.delete(2);
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('1,3');
    });

    it('should delete tail given the tail is equal the value to be deleted', () => {
      const linkedList = new LinkedList();

      linkedList.prepend(1);
      linkedList.prepend(2);
      linkedList.append(3);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('2,1,3');

      linkedList.delete(3);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('1');
      expect(linkedList.toString()).toBe('2,1');
    });

    it('should return empty list given the linked list only has one node and equal the value to be deleted', () => {
      const linkedList = new LinkedList();
      linkedList.prepend(1);
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('1');
      expect(linkedList.toString()).toBe('1');

      linkedList.delete(1);
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.toString()).toBe('');
    });

    it('should return the same list given the linked list has no node equal the value to be deleted', () => {
      const linkedList = new LinkedList();

      linkedList.prepend(1);
      linkedList.prepend(2);
      linkedList.append(3);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('2,1,3');

      linkedList.delete(4);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('3');
      expect(linkedList.toString()).toBe('2,1,3');
    });

    it('should delete node by value from linked list', () => {
      const linkedList = new LinkedList();

      linkedList.append(1);
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(4);
      linkedList.append(5);

      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('5');

      linkedList.delete(3);
      expect(linkedList.toString()).toBe('1,1,2,4,5');

      linkedList.delete(3);
      expect(linkedList.toString()).toBe('1,1,2,4,5');

      linkedList.delete(1);
      expect(linkedList.toString()).toBe('2,4,5');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('5');

      linkedList.delete(5);
      expect(linkedList.toString()).toBe('2,4');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('4');

      linkedList.delete(4);
      expect(linkedList.toString()).toBe('2');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('2');

      linkedList.delete(2);
      expect(linkedList.toString()).toBe('');
    });
  });
});
