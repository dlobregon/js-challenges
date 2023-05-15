 /**
  * goal: return true if all values are unique, otherwise false
  */

// my own solution
 const unique = (str) => {
    const store = new Set()
    for (char of str) {
        store.add(char)
    }
    return store.size === str.length
 }


 /*console.log(unique('abcdef'))
 console.log(unique('abcdeefuip'))*/

 // using arrays
const uniqueWithArrays = (str) =>{
    const store = []
    for (char of str) {
        if(store.indexOf(char)!==-1){
            return false
        } else {
            store.push(char)   
        }
    }
    return true
}

/*console.log(uniqueWithArrays('abcdef'))
console.log(uniqueWithArrays('abcdeefuip'))*/


// using objects
const uniqueWithObjects = (str) =>{
    const store = {}
    for (char of str) {
        if (store[char]) {
            return false;
        }
        store[char] = 1
    }
    return true
}
/*console.log(uniqueWithObjects('abcdef'))
console.log(uniqueWithObjects('abcdeefuip'))*/


// usint the lastIndexOf
const uniqueWithLastIndexOf = (str) => {
    for (index in str) {
        if (str.lastIndexOf(str[index]) !== Number(index)) {
            return false
        }
    }
    return true
}


console.log(uniqueWithLastIndexOf('abcdef'))
console.log(uniqueWithLastIndexOf('abcdeefuip'))



