import SinglyLinkedList from "./SinglyLinkedList.js";

let linkedList = new SinglyLinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

linkedList.pop();
linkedList.pop();
linkedList.pop();

console.log(linkedList);
