// using different approach with set
const unique = str => {
    const store = new Set()
    for (letter of str) {
        if (store.has(letter))
            return false
        store.add(letter)
    }
    return true
}

console.log(unique('abcd'))
console.log(unique('abcdade'))

const unique2 = str => {
    return new Set(str).size === str.length
}

console.log(unique2('abcd'))
console.log(unique2('abcdade'))