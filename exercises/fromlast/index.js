// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  if(!list.head) return null;
  let i = 0;
  let slow = list.getFirst();
  let fast = list.getFirst();
  while(fast.next) {
    if(i >= n) slow = slow.next;
    fast = fast.next;
    i++;
  }
  return slow;
}

module.exports = fromLast;
