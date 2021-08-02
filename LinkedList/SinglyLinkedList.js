import Node from "./Node";

export default class SinglyLinkedList {
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
  shift() {
    if (!this.head) {
      return;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let shiftedNode = this.head;
    this.head = shiftedNode.next;
    shiftedNode.next = null;
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      this.head = newNode;
      this.head.next = currentNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
  set(index, value) {
    let foundNode = this.get(index);
    console.log(foundNode);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = value;
    }
  }
}
