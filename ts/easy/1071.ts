function checkDivisor(str1: string, charsToDivide: string): boolean {
    const str1Length = str1.length
    const commonCharsLength = charsToDivide.length
    const repetitions = str1Length / commonCharsLength
    let repetitionString = ''

    for (let index = 0; index < repetitions; index++) {
        repetitionString += charsToDivide
    }

    return repetitionString === str1    
}

function gcdOfStrings(str1: string, str2: string): string {
    const str1Length = str1.length;
    let equalChars = ''

    for (let index = 0; index < str1Length; index++) {
        const currentChar = str1[index]
        const currentChar2 = str2[index]
        if(currentChar !== currentChar2){
            break
        }
        equalChars += currentChar
        const isDivisor = checkDivisor(str1, equalChars)
        if(isDivisor){
            return equalChars 
        }    

    }

    return ''
};

console.assert(gcdOfStrings('ABCDEF', 'ABC') === 'A')
console.assert(gcdOfStrings('ABCABC', 'ABC') === 'ABC')
console.assert(gcdOfStrings('ABABAB', 'AB') === 'AB')
console.assert(gcdOfStrings('TAUXXTAUXXTAUXXTAUXX', 'TAUXX') === 'TAUXX')
console.assert(gcdOfStrings('ABABA', 'ABA') === '')
