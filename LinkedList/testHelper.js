import Node from "./Node";
export const generateMockList = function (
  loops,
  mockLinkedList,
  reverse = false
) {
  if (!reverse) {
    mockLinkedList.head = new Node(1);
    mockLinkedList.tail = new Node(loops);
    mockLinkedList.length = loops;

    let currentNode = mockLinkedList.head;
    for (let i = 1; i < loops; i++) {
      currentNode.next = new Node(i + 1);
      currentNode = currentNode.next;
    }
  } else if (reverse) {
    mockLinkedList.head = new Node(loops);
    mockLinkedList.tail = new Node(1);
    mockLinkedList.length = loops;
    let currentNode = mockLinkedList.head;
    for (let i = 1; i < loops; i++) {
      currentNode.next = new Node(loops - i);
      currentNode = currentNode.next;
    }
  }
};
