function insertionSorting(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] < array[i-1] && typeof(array[i-1]) != "undefined"){
            for(let y = 0; y < i; y++){
                if(array[i-y] < array[i-y-1]){
                    let val1 = array[i-y];
                    let val2 = array[i-y-1];
                    array.splice(i-y, 1, val2);
                    array.splice(i-y-1, 1, val1);
                }
            }
        }
    }
    return array
}

console.log(insertionSorting([3, 4, 1, 2, 6, 5, 9, 7, 8]));