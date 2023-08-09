const mergeSort = (input) => {
  if (input.length < 2) {
    return input;
  }
  const mid = Math.floor(input.length / 2);
  const left = input.slice(0, mid);
  const right = input.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const temp = [];
  while (left.length > 0 && right.length > 0) {
    left[0] < right[0] ? temp.push(left.shift()) : temp.push(right.shift());
  }
  return left.length > 0 ? [...temp, ...left] : [...temp, ...right];
};
