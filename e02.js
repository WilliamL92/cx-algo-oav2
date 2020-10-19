function insertionSort(input) {
    for (let i = 1; i < input.length; i++) {
      const key = input[i]
  
      let j = i - 1
      while (j >= 0 && input[j] > key) {
        input[j + 1] = input[j]
        j -= 1
      }
      input[j + 1] = key
    }
  
    return input
  }
  
  const arrayToSort = [6, 5, 3, 1, 8, 7, 2, 4]
  insertionSort(arrayToSort)
  
  console.log(arrayToSort)