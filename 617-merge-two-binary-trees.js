function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(t1, t2) {
  function merge(n1, n2) {
    if (!n1 && !n2) {
      return null;
    }

    let value = 0;

    if (n1 && n1.val) {
      value += n1.val;
    }

    if (n2 && n2.val) {
      value += n2.val;
    }

    const node = new TreeNode(value);

    node.left = merge(n1 ? n1.left : null, n2 ? n2.left : null);
    node.right = merge(n1 ? n1.right : null, n2 ? n2.right : null);

    return node;
  }

  return merge(t1, t2);
}
