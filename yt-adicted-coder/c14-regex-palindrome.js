/**
 * video: https://www.youtube.com/watch?v=s7jJSNLrcDY
 * A palindrom is a string the same forward and backward
 */

// strings 
const one = 'Was it a car or cat I saw' // should return true
const two = 'Red -rum-, sir, -is-murder' // should return true
const three = 'I got up early this morning' // should return false

const checkPalindrome = str => {
    let initialString = str.replace('-','').split(' ').join('').toLowerCase()
    const newString = initialString.split(' ').reverse().join('')
    console.log(initialString)
    console.log(newString)
    return initialString.includes(newString)
}


/*console.log(checkPalindrome(one))
console.log(checkPalindrome(two))
console.log(checkPalindrome(three))*/


// video solution
const checkPalindrome1 = str => {
    const tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase()
    const second = tempStr.split(' ').reverse().join('')
    console.log(tempStr)
    console.log(second)
    return tempStr === second
}
console.log('-------------')
console.log(checkPalindrome1(one))
console.log(checkPalindrome(one))
//console.log(checkPalindrome1(two))
//console.log(checkPalindrome1(three))