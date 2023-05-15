// the goal of this challenge is create a function that returns the second value:
// the second lowest value, and the second highest value. 
// the function will only check 'unique values'
// video: https://www.youtube.com/watch?v=rZ0SBLGlUpk
/**
 * Examples:
 * 1- input: [3,2,88,3,-11,67,7], output = 2, 67
 * 2- input: [11, 44, 22], output = 22
 * 3- input: [4,2], output = 24
 * 4- input: [1], output = 1
 */


// my solution
const secondValue = arr => {
    if (arr.length===1) 
        return arr
    const sortedValues = arr.sort((a,b) => a-b)
    if (sortedValues.length === 2) 
        return sortedValues
    if (sortedValues.length === 3) 
        return [sortedValues[1]]
    return [sortedValues[1], sortedValues[sortedValues.length-2]]
}

console.log(secondValue([3,2,88,3,-11,67,7]))
console.log(secondValue([11,44,22]))
console.log(secondValue([4,2]))
console.log(secondValue([1]))


// code found in the video
/**
 * this code actually doesn't fit the initial explanation he given 
 */
const secondValue1 = arr => {
    const values = [...new Set(arr)].sort((a,b) => a-b)
    if (values.length < 2) {
        return `${values[0]}`
    } else if (values.length === 2) {
        return `${values[0]} ${values[1]}`
    } else {
        return `${values[1]} ${values[values.length-2]}`
    }
}

console.log(secondValue1([3,2,88,3,-11,67,7]))
console.log(secondValue1([11,44,22]))
console.log(secondValue1([4,2]))
console.log(secondValue1([1]))
