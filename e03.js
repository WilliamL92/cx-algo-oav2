function selectionSorting(array){
    for(let y = 0; y < array.length; y++){
        for(let i = 0; i < array.length; i++){
            if(array[i] < array[i+1]){
                let val1 = array[i];
                let val2 = array[i+1];
                array.splice(i, 1, val2);
                array.splice(i+1, 1, val1);
            }   
        }
    }
    return array;
}

console.log(selectionSorting([9, 5, 3, 7, 1, 4, 2, 8, 2, 6]));