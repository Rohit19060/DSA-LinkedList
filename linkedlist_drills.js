class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// 1. Create a linked list class
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    prevNode.next = currNode.next;
  }
  insertBefore(nextNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let prevNode = this.head;

      while (currNode !== null && currNode.value !== nextNode) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      prevNode.next = new _Node(item, currNode);
    }
  }

  insertAfter(prevNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let prevNode = this.head;

      while (currNode !== null && currNode.value !== prevNode) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      if (currNode !== null) {
        console.log("Item not found on list");
        return;
      }
      prevNode.next = new _Node(item, currNode);
    }
  }

  insertAt(index, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currNode = this.head;
    let prevNode = this.head;
    let i = 0;

    while (i !== index) {
      if (!currNode.next) {
        console.log(
          "This index does not exist use insertLast to add to the end of the list"
        );
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
      i++;
    }
    if (currNode === null) {
      console.log("Item not found on list (insertAt)");
      return;
    }

    let pushedItem = prevNode;
    let newItem = new _Node(item, prevNode.next);
    pushedItem.next = newItem;
  }
}

// 2. Create a singly linked list
function main() {
  let SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");
  SLL.insertFirst("Tauhida");
  SLL.remove("squirrel");
  SLL.insertBefore("Boomer", "Athena");
  SLL.insertAfter("Helo", "Hotdog");
  SLL.insertAt(3, "Kat");
  SLL.remove("Tauhida");
  //   console.log(JSON.stringify(SLL));
  display(SLL);
  //   size(SLL);
  //   isEmpty(SLL);
  //   findPrevious("Husker", SLL);
  //   findLast(SLL);
  //   reverse(SLL);
  console.log(middleList(SLL));
  //   console.log(thirdLast(SLL));
}

main();

// 3. Supplemental functions for a linked list
function display(linkedList) {
  let tempNode = linkedList.head;
  while (tempNode !== null) {
    console.log(tempNode);
    tempNode = tempNode.next;
  }
}

function size(list) {
  let currNode = list.head;
  let i = 0;
  while (currNode.next !== null) {
    currNode = currNode.next;
    i++;
  }
  return i;
}

function isEmpty(list) {
  return list.head ? false : true;
}

function findPrevious(item, linkedList) {
  let tempNode = linkedList.head;
  if (tempNode.value === item) {
    console.log("Previous Node: Null");
  }
  while (tempNode.next !== null) {
    if (tempNode.next.value === item) {
      console.log("Previous Node: ", tempNode);
    }
    tempNode = tempNode.next;
  }
}

function findLast(linkedList) {
  let tempNode = linkedList.head;
  if (tempNode === null) {
    console.log("Empty List");
  }
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  console.log(`Last Item: ${tempNode.value}`);
}

// 4. Mystery program
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// This function remove the duplicates from a linked list.
// time complexity of this algorithm is Logarithmic Or O(n * 2).

// 5. Reverse a list
function reverse(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  let currNode = list.head;
  let previousNode = null;
  let temp = currNode;
  while (currNode !== null) {
    temp = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = temp;
  }
  list.head = previousNode;
  return display(list);
}

// 6. 3rd from the end
function thirdLast(list) {
  let index = 0;
  let bounds = size(list);
  let currNode = list.head;
  while (currNode !== null && index !== bounds - 2) {
    currNode = currNode.next;
    index++;
  }
  return currNode;
}

// 7. Middle of a list
function middleList(list) {
  let index = 0;
  let bounds = size(list);
  let currNode = list.head;
  while (currNode !== null && index !== Math.floor(bounds / 2)) {
    currNode = currNode.next;
    index++;
  }
  return currNode;
}

// 8. Cycle in a list
const CycleList = new LinkedList();
CycleList.insertLast("A");
CycleList.insertLast("B");
CycleList.insertLast("C");
CycleList.insertLast("D");
// CycleList.head.next.next = CycleList.head;
// console.log(display(CycleList));
function cycles(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  let currNode = list.head;
  let tempNode = null;
  while (currNode !== null && currNode.next !== null) {
    tempNode = currNode.next;
    while (tempNode !== null) {
      if (currNode.value === tempNode.value) {
        return "Cycle in the list";
      }
      tempNode = tempNode.next;
    }
    currNode = currNode.next;
  }
  return "No Cycle in the list";
}

console.log(cycles(CycleList));
