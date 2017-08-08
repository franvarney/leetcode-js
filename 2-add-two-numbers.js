function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(l1, l2) {
  let results = null;
  let carry = false;
  let current1 = l1;
  let current2 = l2;
  let currentResults = null;

  while (current1 || current2) {
    let value1 = current1 ? current1.val : 0;
    let value2 = current2 ? current2.val : 0;
    let value = value1 + value2;

    if (carry) {
      value += 1;
      carry = false;
    }

    if (value > 9) {
      value = value % 10;
      carry = true;
    }

    if (!results) {
      results = new ListNode(value);
      currentResults = results;
    } else {
      currentResults.next = new ListNode(value);
      currentResults = currentResults.next;
    }

    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }

  if (carry) {
    currentResults.next = new ListNode(1);
  }

  return results;
};
