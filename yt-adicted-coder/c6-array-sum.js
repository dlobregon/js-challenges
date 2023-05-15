// the video showing the solution is this
// https://www.youtube.com/watch?v=M5XAAZjXCRM

/**
 * the function receives an array as parameter in where the largest value is the sum of the previous values
 * if the array follows that pattern then the function will return true, otherwise will return false
 */

// this is not a good approach
// doesn't cover the original idea
const sumArray = (arr) => {
    const factors = arr.slice(0,arr.length-1)
    const sum = factors.reduce( (sum, factor) => sum +factor, 0)
    return sum === arr[arr.length-1]
}


console.log(sumArray([1, 2, 4, 6, 13]))
console.log(sumArray([1, 2, 4, 34, 22]))


/*
const arreglo = [1, -2,15,2]
arreglo.sort((a,b) => {
    console.log(a,b)
    return a-b
})

console.log(arreglo)

*/

// solution given by the Channel author. 

const ArraySum = (arr) => {
    let sortedArray = arr.sort((a,b) =>  a-b)
    const largest = sortedArray.pop()
    let number = 0
    sortedArray.forEach(item => (number += item))
    return largest === number
}


console.log(ArraySum([1, 2, 4, 6, 13]))
console.log(ArraySum([1, 2, 4, 34, 22]))


// mixing both approaches. 

const ArraySum1 = (arr) => {
    const sortedArray = arr.sort((a,b) => a-b)
    const largest = sortedArray.pop()
    const sum = sortedArray.reduce((sum, factor) => sum+factor, 0)
    return largest === sum
}

console.log(ArraySum1([1, 2, 4, 6, 13]))
console.log(ArraySum1([1, 2, 4, 34, 22]))