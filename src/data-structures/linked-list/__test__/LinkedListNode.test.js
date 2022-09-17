import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should convert the value of a node to string', () => {
    const node = new LinkedListNode(1);
    expect(node.toString()).toBe('1');
  });
});
