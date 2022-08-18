async function insertionSort(array, setter) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];

    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      setter([...array, array]);
      j--;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );
    }
    array[j + 1] = current;
    setter([...array, array]);
  }
  return array;
}
async function selectionSort(array, setter) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 50)
        );
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    setter([...array, array]);
    array[minIndex] = temp;
    setter([...array, array]);
  }
  return array;
}
async function BubbleSort(array, setter) {
  let swapCounter = -1;
  for (let i = 0; i < array.length - 1; i++) {
    if (swapCounter === 0) {
      break;
    }
    swapCounter = 0;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        setter([...array, array]);
        array[j + 1] = temp;
        setter([...array, array]);
        swapCounter++;
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 50)
        );
      }
    }
  }
}
export { insertionSort, selectionSort, BubbleSort };
