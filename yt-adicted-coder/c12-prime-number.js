/**
 * 
 * video: https://www.youtube.com/watch?v=fUJe3uKyJrs
 * 
 * Prime number: can only divide evely by itself or one. 
 * 
 */


// first solution
const checkPrime = num => {
    if (num < 2) 
        return false
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(checkPrime(8)) // false
console.log(checkPrime(11)) // true
console.log(checkPrime(121)) // false
console.log(checkPrime(127)) // true


console.log('--- second solution')

const isPrime = num  => {
    if (num<2)
        return false
    const root = Math.ceil(Math.sqrt(num))
    for (let i = 2; i <= root; i++) {
        if (num % i === 0)
            return false
    }
    return true
}

console.log(isPrime(8)) // false
console.log(isPrime(11)) // true
console.log(isPrime(121)) // false
console.log(isPrime(127)) // true