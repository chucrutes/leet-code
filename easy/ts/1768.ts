type WordData = {
    word: string,
    length: number
}

type GetRemaining = {
    word1: WordData
    word2: WordData,
    lengthDifference: number
}

function getRemaining({lengthDifference, word1: {word: word1, length: word1Length}, word2: {word: word2, length: word2Length}}: GetRemaining){
    return lengthDifference > 0 ? word1.slice(word2Length, word2Length + lengthDifference) : word2.slice(word1Length, word1Length + Math.abs(lengthDifference))
}

function mergeAlternately(word1: string, word2: string): string {
    let result = ''

    const word1Length = word1.length
    const word2Length = word2.length
    const lengthDifference = word1Length - word2Length
    const smallerWord = word1Length <= word2Length ? word1 : word2

    const remaining = getRemaining({lengthDifference, word1: {word: word1, length: word1Length}, word2: {word: word2, length: word2Length}})
    

    for (let i = 0; i < smallerWord.length; i++) {
        result += word1[i] + word2[i]
    }
    
    return result += remaining
};