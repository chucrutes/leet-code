from typing import List


grid = [[9,1,7],[8,9,2],[3,4,6]]
grid2 = [[1,3],[2,2]]
def findRepeatingAndMissing(matrix: List[List[int]]):
    matrixLength = len(matrix)
    maxNum = matrixLength * matrixLength

    counts = {}

    for row in matrix:
            for num in row:
                 counts[num] = counts.get(num, 0) + 1

    repeatingNum = 0
    missingNum = 0

    for i in range(1, maxNum + 1):
         if counts.get(i,0) == 2:
              repeatingNum = i
         elif counts.get(i, 0) == 0:
              missingNum = i
    
    return repeatingNum, missingNum

print(findRepeatingAndMissing(grid))
print(findRepeatingAndMissing(grid2))








    