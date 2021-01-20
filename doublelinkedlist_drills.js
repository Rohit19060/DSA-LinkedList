class _Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

// 9. Doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    if (this.head === null) {
      return (this.head = new _Node(value, null, null));
    }
    let holderNode = new _Node(value, null, this.head);
    this.head = holderNode;
    this.head.next.prev = this.head;
  }
  insertLast(value) {
    if (!this.head) {
      return this.insertFirst(value);
    }
    if (this.head.next === null) {
      return this.insertFirst(value);
    }
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(value, currentNode, null);
  }

  insertBefore(nextValue, value) {
    if (!this.head) {
      return console.log("This list is empty");
    }
    if (this.head.next === null) {
      return this.insertFirst(value);
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null && currentNode.value !== nextValue) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode.value !== nextValue) {
      return console.log("Item could not be found");
    }
    previousNode.next = new _Node(value, currentNode.prev, currentNode);
  }

  insertAfter(afterItem, value) {
    if (!this.head) {
      return console.log("This list is empty");
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null && currentNode.value !== afterItem) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode.value !== afterItem) {
      return console.log("This item could not be found");
    }
    if (currentNode.next === null) {
      currentNode.next = new _Node(value, previousNode, null);
    }
    let tempNode = currentNode.next;
    currentNode.next = new _Node(value, currentNode, tempNode);
  }

  getSize() {
    if (!this.head) {
      console.log(0);
      return 0;
    }

    let currentNode = this.head;
    let counter = 0;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      counter++;
    }

    console.log(counter);
    return counter;
  }

  insertAt(index, value) {
    if (!this.head) {
      return console.log("This list is empty");
    }
    if (index > this.getSize() + 1) {
      return console.log("Cannot access parts of list which do not exist");
    }
    let counter = 0;
    let currentNode = this.head;
    while (currentNode.next !== null && counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    if (currentNode.next === null) {
      return this.insertLast(value);
    }
    if (counter !== index) {
      return console.log("An Item at this index could not be found");
    }
    this.insertBefore(currentNode.value, value);
  }

  removeByValue(value) {
    if (!this.head) {
      return console.log(
        "This list is empty and therefore can't have anything removed from it..."
      );
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode.value !== value) {
      return console.log("This item could not be found in the array");
    }
    if (currentNode.next === null) {
      return (previousNode.next = null);
    }
    if (previousNode === null) {
      return (this.head = new _Node(
        currentNode.next.value,
        null,
        currentNode.next.next
      ));
    }
    previousNode.next = new _Node(
      currentNode.next.value,
      previousNode,
      currentNode.next.next
    );
  }

  find(value) {
    if (!this.head) {
      return console.log("This list contains no values");
    }
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode.value !== value) {
      return "The item couldn't be found";
    }
    return currentNode.value;
  }
}

function displayList(list) {
  let currentNode = list.head;
  while (currentNode !== null) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
}

const DLL = new DoublyLinkedList();
DLL.insertFirst("Aquaria");
DLL.insertFirst("Caprica");
DLL.insertFirst("Gemenon");
DLL.insertFirst("Picon");
DLL.insertFirst("Sagittaron");
DLL.insertFirst("Tauron");
DLL.removeByValue("Picon");

// 10. Reverse a DLL
function reverse(list) {
  let current = list.head;
  let prev = null;
  while (current) {
    let next = current.next;
    current.next = prev;
    current.prev = next;
    prev = current;
    current = next;
  }
  list.tail = list.head;
  list.head = prev;
}

// displayList(DLL);
// reverse(DLL);
// displayList(DLL);
