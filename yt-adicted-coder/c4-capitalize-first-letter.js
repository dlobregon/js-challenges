/** 
 * the idea is to take a string a captiliza first letter of each string
 */

const capitalizeWords = (str) => {
    let newString = ''
    let words = str && str.split(' ')
    for (let word of words) {
        const newWord = word.slice(0,1).toUpperCase() + word.slice(1,word.length)
        newString+=newWord+' '
    }
    return (newString)

}

console.log(capitalizeWords('I woke early today'))
console.log(capitalizeWords('I went straight to the beach'))



/**
 * Method shown in the video: https://www.youtube.com/watch?v=Uiioo0wqqds
 * 
 */

const capitalizeWords1 = (str) => {
    let words = str.split(' ').map( word =>  word.charAt(0).toUpperCase() + word.slice(1))
    return words.join(' ')
}


console.log(capitalizeWords1('I woke early today'))
console.log(capitalizeWords1('I went straight to the beach'))


/** 
 * another approach
 */

const capitalizeWords2 = (str) => {
    let words = str.split(' ').reduce((newString, word) => {
        const newWord = word.charAt(0).toUpperCase() + word.slice(1) + ' '
        return newString += newWord
    }, '')
    return words
}

console.log(capitalizeWords2('I woke early today'))
console.log(capitalizeWords2('I went straight to the beach'))