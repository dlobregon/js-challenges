// this is an improvement of the c1 challenge. 
// The function will return all the longest words, 1-* with the same size. 

const longestWords = (str) => {
    let words = str && str.split(' ')
    let longestWords = []
    let longestWord = ''
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
            longestWords = [longestWord]
        }
        else if (word.length === longestWord.length) {
                longestWords.push(word)
        }
    }
    return longestWords
}


console.log(longestWords('I woke early today'))
console.log(longestWords('I went straight to the beach'))


/** solution provided by the channel  
 * video:https://www.youtube.com/watch?v=a7dQ51sgZzA
*/


const longestWords2 = (str) => {
    let words = str.split(' ')
    let size = 0
    let max = ['']

    for(let i =0; i<words.length; i++) {
        if (words[i].length >= size) {
            size = words[i].length
            if (max[max.length-1].length < words[i].length) {
                max = []
                max.push(words[i])
            } else {
                max = [...max, words[i]]
            }
        }
        return [...max]
    }
}

console.log(longestWords2('I woke early today'))
console.log(longestWords2('I went straight to the beach'))