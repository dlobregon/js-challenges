// goal: find the logest word in a given string. 

const longestWord = (str) => {
    let words = str && str.split(' ')
    let longestWord = ''

    for (let word of words) {
        if (word.length > longestWord.length)
            longestWord = word
    }
    return longestWord
}


console.log(longestWord('I woke early today'))
console.log(longestWord('I went straight to the beach'))