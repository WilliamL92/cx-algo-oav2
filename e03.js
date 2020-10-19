function selectionSort(input) {
    for (let i = 0; i < input.length; i++) {
      let min = i
  
      for (let j = i + 1; j < input.length; j++) {
        if (input[min] > input[j]) {
          min = j
        }
      }
  
      if (i !== min) {
        const temp = input[i]
  
        input[i] = input[min]
        input[min] = temp
      }
    }
  
    return input
  }
  
  const arrayToSort = [5, 2, 4, 6, 1, 3]
  selectionSort(arrayToSort)
  
  console.log(arrayToSort)