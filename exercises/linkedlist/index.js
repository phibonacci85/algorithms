// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let cur = this.head;
    let count = 0;
    while (cur) {
      count++;
      cur = cur.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let cur = this.head;
    while (cur && cur.next) {
      cur = cur.next;
    }
    return cur;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
    } else {
      let cur = this.head;
      while (cur && cur.next && cur.next.next) {
        cur = cur.next;
      }
      cur.next = null;
    }
  }

  insertLast(data) {
    const tail = this.getLast();
    if (!tail) {
      this.head = new Node(data);
    } else {
      tail.next = new Node(data);
    }
  }

  getAt(i) {
    let count = 0;
    let cur = this.head;
    while (count < i) {
      if(!cur) return null;
      cur = cur.next;
      count++;
    }
    return cur;
  }

  removeAt(i) {
    if (i === 0) {
      this.removeFirst();
    } else {
      let prev = this.getAt(i - 1);
      if (prev && prev.next) {
        prev.next = prev.next.next;
      }
    }
  }

  insertAt(data, i) {
    if (i === 0 || !this.head) {
      this.insertFirst(data);
    } else {
      let prev = this.getAt(i - 1) || this.getLast();
      prev.next = new Node(data, prev.next);
    }
  }

  forEach(fn) {
    let cur = this.head;
    while (cur) {
      fn(cur);
      cur = cur.next;
    }
  }

  * [Symbol.iterator] () {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = {Node, LinkedList};
