type Matrix = number[][]
type SortedNums = {
    num: number,
    repetitions: number
} 

type Return = {
    missingNum: number,
    repeatingNum: number
}


function findPosition(num: number, numsRepetitions: Map<number, number>){
    return numsRepetitions.get(num)
}
function findRepeatingNum(numsRepetitions: SortedNums[]){
    return numsRepetitions.find(item => item.repetitions > 1)
}

function returnMissingAndRepeatingNum(maxLength: number, map: Map<number, number>){
    let missingNum:number = 0
    let repeatingNum:number = 0
    
    for (let i = 1; i <= maxLength; i++) {
        if(missingNum !== 0 && repeatingNum !== 0) {
            return {
                missingNum,
                repeatingNum
            }
        }

        const repetitions = findPosition(i, map)
        
        if(!repetitions){
            missingNum = i
            continue
        }
         repeatingNum = repetitions === 2 ? i : repeatingNum 
    }

    return {missingNum, repeatingNum}
}


function findMissingAndRepeatedValues(matrix: Matrix): number[]{
    const matrixLength = matrix.length;
    const maxLength = matrixLength * matrixLength
    const numsRepetitions: Map<number, number> = new Map()


    for (const arr of matrix) {
        for (const item of arr) {
            
            const indexFound = findPosition(item, numsRepetitions)
            if(!indexFound){
                numsRepetitions.set(item, 1)
            }else{
                numsRepetitions.set(item, indexFound + 1)
            }

        }
    }


  const {missingNum, repeatingNum} =  returnMissingAndRepeatingNum(maxLength, numsRepetitions)

return [repeatingNum, missingNum]

}
