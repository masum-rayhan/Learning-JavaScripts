const array1 = [0,3,4,31];
const array2 = [4,6,30];

function mergeSortedArray(arr1, arr2){
    const mergedArray = [];

    for(let i = 0; i< arr1.length; i++){
        mergedArray.push(arr1[i]);
    }
    
    for(let j = 0; j< arr2.length; j++){
        mergedArray.push(arr2[j]);
    }

    mergedArray.sort((a, b) => a - b);

    console.log([mergedArray.join(',')]); 
}

mergeSortedArray([0,3,4,31],[4,6,30]);