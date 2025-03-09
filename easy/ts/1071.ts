function getDivisor(str1Length: number, commonCharsLength: number): number {
  for (let index = commonCharsLength; index > 0; index--) {
    if (str1Length % index === 0) {
      return index;
    }
  }
  return 0;
}

function checkDivisor(str1: string, charsToDivide: string): boolean {
  const str1Length = str1.length;
  const commonCharsLength = charsToDivide.length;
  const repetitions = str1Length / commonCharsLength;
  let repetitionString = "";

  for (let index = 0; index < repetitions; index++) {
    repetitionString += charsToDivide;
  }
  return repetitionString === str1;
}

function getWord(str1: string, divisor: number): string {
  return str1.slice(0, divisor);
}

function getBiggestWord(str1: string, str2: string) {
  if (str1.length > str2.length) {
    return {
      biggest: str1,
      smallest: str2,
    };
  }
  return {
    biggest: str2,
    smallest: str1,
  };
}

function gcdOfStrings(str1: string, str2: string): string {
  const {biggest, smallest} = getBiggestWord(str1, str2);
  let equalChars = "";
  let isActuallyDivisor = false;
  let actuallyStringDivisor = "";
  const biggestLength = biggest.length;

  for (let index = 0; index < biggestLength; index++) {
    const currentChar = biggest[index];
    const currentChar2 = smallest[index];
    if (currentChar !== currentChar2) continue;
    equalChars += currentChar;
  }

  while (!isActuallyDivisor) {
    const divisor = getDivisor(biggestLength, equalChars.length);
    if (divisor === 0) return "";

    const newWord = getWord(smallest, divisor);
    const verifyIsActuallyDivisor = checkDivisor(smallest, newWord);

    if (!verifyIsActuallyDivisor) {
      equalChars = equalChars.slice(0, equalChars.length - 1);
      continue;
    }

    isActuallyDivisor = true;
    actuallyStringDivisor = newWord;
  }


    const isReallyDivisor = checkDivisor(biggest, actuallyStringDivisor);

    if (!isReallyDivisor) {
        return "";
    }
    
  return actuallyStringDivisor;
}

console.assert(gcdOfStrings("ABCABC", "ABC") === "ABC", "Test Case 1 Failed");
console.assert(gcdOfStrings("ABABAB", "ABAB") === "AB", "Test Case 2 Failed");
console.assert(gcdOfStrings("LEET", "CODE") === "", "Test Case 3 Failed");
console.assert(
    gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX") === "TAUXX",
    "Test Case 4 Failed"
);
console.assert(gcdOfStrings("ABCDEF", "ABC") === "", "Test Case 5 Failed");
