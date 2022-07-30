/*
  1. https://leetcode.com/problems/reverse-linked-list/
 */

const reverseListWithIteration = function (head) {
  if (!head) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    const saved = curr.next;
    curr.next = prev;
    prev = curr;
    curr = saved;
  }

  return prev;
};
