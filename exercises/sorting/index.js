// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const lesser = arr[min];
      arr[min] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let midPoint = arr.length / 2;
  return merge(mergeSort(arr.slice(0, midPoint)), mergeSort(arr.slice(midPoint, arr.length)));
}

function merge(left, right) {
  const merged = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];

  // while (left.length || right.length) {
  //   if (left.length === 0) {
  //     merged.push(right.shift());
  //   } else if (right.length === 0) {
  //     merged.push(left.shift());
  //   } else if (left[0] < right[0]) {
  //     merged.push(left.shift());
  //   } else {
  //     merged.push(right.shift());
  //   }
  // }
  //
  // return merged;
}

module.exports = {bubbleSort, selectionSort, mergeSort, merge};
