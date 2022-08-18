function mergeSort(array) {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length < 2) {
    return array;
  }
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}
