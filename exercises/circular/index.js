// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // HOW DOES THIS WORK???
  let i = list.getFirst();
  let j = list.getFirst();

  while (j.next && j.next.next) {
    i = i.next;
    j = j.next.next;
    if (i === j) return true;

  }
  return false;

  /*
  if (!list.head || !list.head.next) return false;
  let i = 1;
  let node = list.head.next;
  while(node) {
    let j = 0;
    let check = list.head;
    while (j < i) {
      if (node === check) return true;
      check = check.next;
      j++;
    }
    i++;
    node = node.next;
  }
  return false;
  */
}

module.exports = circular;
