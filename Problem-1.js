// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

// // 2 parameters - arrays - no size limit
// // return true or false

// function containCommonItems(arr1, arr2){
//     for(let i=0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// containCommonItems(array1, array2);

// // O(a*b) - Time Complexity

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containCommonItems2(arr1, arr2){
    //loop through each item of array1 and create object where properties === items in the array
    let map = {}; 

    for(let i = 0; i < arr1.length; i++){
       if(!map[arr1[i]]){
         const item = arr1[i];
         map[item] = true;
       } 
    }

    // loop through array2 and check if item in array2 exists on created object
    
    for(let j =0; j < arr2.length; j++){
        if(map[arr2[j]]){
           return true;   
        }
    }
    return false;
}

    containCommonItems2(array1, array2);

    //O(a + b) - Time Complexity

