function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function getMaxIndex(values, start, end) {
  let maxIndex = start;

  for (let i = start + 1; i <= end; ++i) {
    if (values[i] > values[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

function constructMaximumBinaryTree(nums) {
  let root = null;

  function build(start, end) {
    if (start > end) {
      return null;
    }

    const maxIndex = getMaxIndex(nums, start, end);
    const node = new TreeNode(nums[maxIndex]);

    node.left = build(start, maxIndex - 1);
    node.right = build(maxIndex + 1, end);

    return node;
  }

  return build(0, nums.length - 1);
}
