import Node from "./Node.js";
let { SinglyLinkedList } = require("./SinglyLinkedList.js");

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

  it("correct remove 1 node", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.pop();

    mockLinkedList = {
      head: new Node(1),
      tail: new Node(1),
      length: 1,
    };
    expect(linkedList).toEqual(mockLinkedList);

    linkedList.pop();
    mockLinkedList = {
      head: null,
      tail: null,
      length: 0,
    };
    expect(linkedList).toEqual(mockLinkedList);
  });
});
