function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];

        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  let arr = [13,6,12,72,11];
  console.log(insertionSort(arr))