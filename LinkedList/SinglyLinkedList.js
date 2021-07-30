import Node from "./Node";

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    //create new Node
    let newNode = new Node(value);
    //if no head set head to new Node;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set node to end
      this.tail.next = newNode;
      //set tail to new Node;
      this.tail = newNode;
    }
    //increment length
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let currentNode = this.head;
      let newTail = this.head;
      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return this;
    }
  }
}

module.exports = { SinglyLinkedList };
