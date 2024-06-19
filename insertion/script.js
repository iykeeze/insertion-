function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i]; // Current element to be inserted
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current, to one position ahead
    // of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into the correct position
    arr[j + 1] = current;
  }
  return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original Array:", array);
insertionSort(array);
console.log("Sorted Array:", array);
