import Node from "./Node.js";
import SinglyLinkedList from "./SinglyLinkedList.js";
import { generateMockList } from "./testHelper.js";

describe("testing singlyLinkedList", () => {
  let linkedList;
  let mockLinkedList;
  beforeEach(() => {
    linkedList = new SinglyLinkedList();
    mockLinkedList = {
      head: null,
      tail: null,
      length: 0,
    };
  });

  it("correctly creates a Node", () => {
    expect(new Node(1)).toEqual({ val: 1, next: null });
    expect(new Node(1)).not.toEqual({ val: 2, next: null });
  });

  it("correctly creates a linkedList", () => {
    expect(linkedList).toEqual(mockLinkedList);

    mockLinkedList.head = 1;
    expect(linkedList).not.toEqual(mockLinkedList);
  });
  it("add 1 node to linkedList", () => {
    linkedList.push(1);
    mockLinkedList = {
      ...mockLinkedList,
      head: new Node(1),
      tail: new Node(1),
      length: 1,
    };
    expect(linkedList).toEqual(mockLinkedList);
  });

  it("can add 2 node to linkedList", () => {
    linkedList.push(1);
    linkedList.push(2);
    mockLinkedList = {
      head: new Node(1),
      tail: new Node(2),
      length: 2,
    };
    mockLinkedList.head.next = new Node(2);
    expect(linkedList).toEqual(mockLinkedList);
  });

  it("return undefined if 0 item to pop off", () => {
    expect(linkedList.pop()).toBe(undefined);
  });

  it("correctly remove 1 node", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.pop();
    mockLinkedList = {
      head: new Node(1),
      tail: new Node(2),
      length: 2,
    };
    mockLinkedList.head.next = new Node(2);

    expect(linkedList).toEqual(mockLinkedList);

    linkedList.pop();
    mockLinkedList.head.next = null;
    mockLinkedList.tail = mockLinkedList.head;
    mockLinkedList.length = 1;
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.pop();
    mockLinkedList = {
      head: null,
      tail: null,
      length: 0,
    };
    expect(linkedList).toEqual(mockLinkedList);
    mockLinkedList.head = new Node(1);
    expect(linkedList).not.toEqual(mockLinkedList);
  });

  it("correctly shift nodes", () => {
    linkedList.push(1);
    linkedList.push(2);
    let shiftedNode = linkedList.shift();
    mockLinkedList = {
      head: new Node(2),
      tail: new Node(2),
      length: 1,
    };
    expect(linkedList).toEqual(mockLinkedList);
    expect(shiftedNode).toEqual(new Node(1));
    linkedList.shift();
    mockLinkedList = {
      head: null,
      tail: null,
      length: 0,
    };
    expect(linkedList).toEqual(mockLinkedList);

    expect(linkedList.shift()).toBe(undefined);
  });

  it("correctly unshift nodes", () => {
    linkedList.unshift(1);
    mockLinkedList = {
      head: new Node(1),
      tail: new Node(1),
      length: 1,
    };
    expect(linkedList).toEqual(mockLinkedList);
    linkedList.unshift(2);
    mockLinkedList.head = new Node(2);
    mockLinkedList.head.next = new Node(1);
    mockLinkedList.length = 2;
    expect(linkedList).toEqual(mockLinkedList);
  });

  it("gets correct node", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);

    generateMockList(6, mockLinkedList);
    expect(linkedList).toEqual(mockLinkedList);
    expect(mockLinkedList.length).toBe(6);

    expect(linkedList.get(1)).toEqual(mockLinkedList.head.next);
    expect(linkedList.get(3)).toEqual(mockLinkedList.head.next.next.next);

    linkedList.pop();
    linkedList.pop();
    linkedList.pop();
    linkedList.pop();
    linkedList.pop();
    linkedList.pop();

    mockLinkedList = {
      head: null,
      tail: null,
      length: 0,
    };
    expect(linkedList).toEqual(mockLinkedList);

    expect(linkedList.get(3)).toBe(null);
  });

  it("set the corrent node", () => {
    expect(linkedList.set(1)).toBe(false);
    linkedList.push(1);
    mockLinkedList = {
      head: new Node(2),
      tail: new Node(2),
      length: 1,
    };
    expect(linkedList.head).toBe(linkedList.tail);
    linkedList.set(0, 2);
    expect(linkedList).toEqual(mockLinkedList);
  });

  it("correct insert nodes", () => {
    linkedList.insert(0, 1);
    mockLinkedList = { head: new Node(1), tail: new Node(1), length: 1 };
    expect(linkedList).toEqual(mockLinkedList);
    linkedList.insert(2, 1);
    expect(linkedList).toEqual(mockLinkedList);
    linkedList.insert(1, 2);
    mockLinkedList.head.next = new Node(2);
    mockLinkedList.tail = new Node(2);
    mockLinkedList.length = 2;
    expect(linkedList).toEqual(mockLinkedList);
    linkedList.insert(0, 5);
    let nextNode = mockLinkedList.head;
    mockLinkedList.head = new Node(5);
    mockLinkedList.head.next = nextNode;
    mockLinkedList.length = 3;
    expect(linkedList).toEqual(mockLinkedList);
    linkedList.insert(1, 3);
    nextNode = mockLinkedList.head.next;
    mockLinkedList.head.next = new Node(3);
    mockLinkedList.head.next.next = nextNode;
    mockLinkedList.length++;
    expect(linkedList).toEqual(mockLinkedList);
  });

  it("correctly removes nodes", () => {
    linkedList.remove(-1);
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.remove(1);
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    generateMockList(4, mockLinkedList);
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.remove(0);
    mockLinkedList.head = mockLinkedList.head.next;
    mockLinkedList.length = 3;
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.remove(3);
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.remove(2);
    mockLinkedList.head.next.next = null;
    mockLinkedList.tail = mockLinkedList.head.next;
    mockLinkedList.length = 2;
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.push(3);
    mockLinkedList.head.next.next = new Node(3);
    mockLinkedList.length = 3;
    mockLinkedList.tail = new Node(3);
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.remove(1);
    let temp = mockLinkedList.head.next.next;
    mockLinkedList.head.next = temp;
    mockLinkedList.length = 2;
    expect(linkedList).toEqual(mockLinkedList);
  });
  it("reverses nodes", () => {
    expect(linkedList.reverse()).toBe(false);

    linkedList.push(1);
    generateMockList(1, mockLinkedList);
    expect(linkedList.reverse()).toEqual(mockLinkedList);

    linkedList.push(2);
    mockLinkedList = {
      head: null,
      tail: null,
      length: 0,
    };
    generateMockList(2, mockLinkedList, true);

    expect(linkedList.reverse()).toEqual(mockLinkedList);
  });
});
