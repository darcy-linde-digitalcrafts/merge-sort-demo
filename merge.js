const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const temp = [];
  let leftPtr = 0;
  let rightPtr = 0;

  while (leftPtr < left.length && rightPtr < right.length) {
    const leftValue = left[leftPtr];
    const rightValue = right[rightPtr];

    if (leftValue <= rightValue) {
      temp.push(leftValue);
      leftPtr++;
    } else {
      temp.push(rightValue);
      rightPtr++;
    }
  }

  if (leftPtr === left.length) {
    return [...temp, ...right.slice(rightPtr)];
  } else {
    return [...temp, ...left.slice(leftPtr)];
  }
};

const unsorted = [1, 8, 4, 5, 23, 6666, 7777, -Infinity, 21, 9001];
console.log(mergeSort(unsorted));
