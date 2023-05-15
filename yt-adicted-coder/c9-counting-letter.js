// challenge video: https://www.youtube.com/watch?v=pz28laEcnkE
// challenge: return firts word with greatest number of repeated letters
// after checking the video we found that the goal is:
// get the first word with the more repited letter

const counteLetter = str => {
    const words = str.split(' ')
    const countingResults = []
    let maxCounting = 0
    let highestWord = ''
    for (const word of words) {
        const letters = word.split('')
        const tmp = new Set()
        let counter = 0
        for (const letter of letters) {
            if (tmp.has(letter)) {
                counter++
            } else  {
                tmp.add(letter)
            }
        }
        if (counter > maxCounting) {
            maxCounting = counter
            highestWord =  word
        }
        countingResults.push(counter)
    }
     return highestWord
}

console.log(counteLetter('Javascript is the greatest programming language'))


// using another  approach 
const countLetters = str => {
    const words = str.split(' ')
    let maxCounting = 0
    let maxWord = ''
    for (const word of words) {
        const tmp = new Set(word.split(''))
        const diff =  word.length - tmp.size
        if (diff > maxCounting) {
            maxCounting = diff
            maxWord = word
        }
    }

    return maxWord
}

console.log(countLetters('Javascript is the greatest programming language'))



/**
 * video solution
 */

const countLetters2 = str =>  {
    let tempArray = str.split(' ')
    tempArray = tempArray.map(item => {
        let tempItem = item.toLowerCase().split('')
        return tempItem.reduce((acc,curr) => {
            acc[curr] = acc[curr]? acc[curr] + 1: 1
            if (acc[curr] > acc.max) 
                acc.max = acc[curr]
            return acc
        }, {max: 1, word: item})
    })

    let amount = 1
    let word = ''
    for (let item of tempArray) {
        if (item.max > amount) {
            amount = item.max
            word = item.word
        }
    }
    
    if (amount>1) {
        return word
    }
    return -1
}

console.log(countLetters2('Javascript is the greatest programming language'))
