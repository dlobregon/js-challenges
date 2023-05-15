/**
 * video: https://www.youtube.com/watch?v=hgw-rCpSddI
 * goal: the function receives an string and then it will return
 * the number of repetitions followed by the letter
 * 
 * Example:
 * input - ffffeerttttooo
 * output -  4f2e1e4t3o
 */


// own solution
const countLetters =  str => {
    const values = str.split('')
    const reg = values.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1
        } else {
            acc[curr] =  acc[curr] + 1
        }
        return acc
    }, {})

    const letters = Object.keys(reg)
    const counting = letters.map((item) => {
        return reg[item] + item
    })
    return counting.join('')
}

console.log(countLetters('ffffeerttttooo'))


// video solution
const countLetters1 = str => {
    let tempArr = str.split('')
    let letters = []
    let count = 1
    for (let i = 0; i< tempArr.length; i++) {
        if(tempArr[i] === tempArr[i+1]) {
            count ++
        } else {
            let value = `${count}${tempArr[i]}`
            letters.push(value)
            count = 1
        }
    }

    return letters.join('')
}

console.log(countLetters1('ffffeerttttooo'))
