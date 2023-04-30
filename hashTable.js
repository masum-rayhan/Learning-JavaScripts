// A object is called Hash Table in JS
//  map and stets are also Hash Table

// obj
const user = {
    name: 'Kylie',
    age:54,
    magic: true,
    scream: function(){
        console.log('ahhhhhhhhh!')
    }
}

user.spell = 'abra kadabra';
// console.log(user);
console.log(user.scream());

// limitations : 
    // Key: only string
    // no order

// Map
const a = new Map(); 
    // its allowed anything as a Key.
    // It can be function
    // array anything
    // maintain insertion order

// Sets
const b = new Sets(); 
    // its only stores Key, No value.