/**
 * Video: https://www.youtube.com/watch?v=SRgPY5_IzWI
 * return numbers with most repeats 
 * if two numbers the repeated the same return first
 * if none repeated return -1
 */

// this is buggy, it has an open room for improvement
const testRepeat = arr => {
    let reps = 0
    let buff = []
    const check = arr.reduce((accu, item, index) => {
        if (!accu[item]) {
            accu[item] = 1
            buff.push(item)
        } else {
            accu[item] = accu[item] + 1
        }
        if (accu[item] >= reps) {
            /*if(arr.indexOf(item) < accu.position) {
                accu.position = arr.indexOf(item)
            }*/
            if (accu[item] > reps) {
                accu.position = arr.indexOf(item)
            } else if (accu[item] === reps && arr.indexOf(item) < accu.position) {
                accu.position = arr.indexOf(item)
            }
            reps = accu[item]
        }
        return accu
    }, {position: arr.length+1})
    if (reps ===1) 
        return -1
    return arr[check.position]
}


console.log(testRepeat([5,2,2,5,3,4])) // return 5
console.log(testRepeat([6, 5, 5, 10, 10, 10])) // return 10
console.log(testRepeat([3, 4, 1, 6, 10])) // return -1

console.log('-------')
// check video suggestion


const testRepeat1 = arr => {
    let max = 1;
    let position = 0;
    let value = -1;
    const tempNumber = arr.reduce((acc, curr, index)=>{
        acc[curr] = acc[curr]
            ? {...acc[curr], amount: acc[curr]['amount'] + 1}
            : {amount:1, index}
        let amount = acc[curr].amount
        let place = acc[curr].index
        if (amount > max  || (amount > max && place <= position && amount > 1)) {
            max = amount
            value = curr
            position = place
        }
        return acc
    }, {})
    return value
}

console.log(testRepeat1([5,2,2,5,3,4])) // return 5
console.log(testRepeat1([6, 5, 5, 10, 10, 10])) // return 10
console.log(testRepeat1([3, 4, 1, 6, 10])) // return -1