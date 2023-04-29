//reverse a string
//output string
// output nahyar musam
const myName = 'Masum Rayhan'

function reverse(str){
    //check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return false;
    }

    const backWard = [];

    const items = str.length - 1;
    for(let i = items; i >= 0; i--){
        backWard.push(str[i]);
    }
    console.log(backWard);
    
    return backWard.join('');
}

reverse('Masum Rayhan');