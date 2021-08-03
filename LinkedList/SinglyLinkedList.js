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
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = value;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      let foundNode = this.get(index - 1);
      let nextNode = foundNode.next;
      foundNode.next = new Node(value);
      foundNode.next.next = nextNode;
      this.length++;
    }
    return this;
  }
  remove(index) {
    if (index > this.length - 1 || index < 0) {
      return false;
    } else if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let previousNode = this.get(index - 1);
      let removedNode = previousNode.next;

      previousNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }
  reverse() {
    if (this.length === 0) {
      return false;
    } else if (this.length === 1) {
      return this;
    } else {
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;

      let prevNode = null;
      let currentNode = this.tail;
      let nextNode = currentNode.next;
      while (currentNode) {
        currentNode.next = prevNode;
        prevNode = currentNode;
        if (nextNode) {
          currentNode = nextNode;
          nextNode = currentNode.next;
        } else {
          break;
        }
      }
    }
    console.log(this);
    return this;
  }
}
