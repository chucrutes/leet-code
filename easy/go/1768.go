package main

type WordData struct {
	word   string
	length int
}

type GetRemaining struct {
	word1            WordData
	word2            WordData
	lengthDifference int
}

func getRemaining(props GetRemaining) string {
	word1, word2, lengthDifference := props.word1, props.word2, props.lengthDifference
	if lengthDifference > 0 {
		return word1.word[word2.length : word2.length+lengthDifference]
	}
	return word2.word[word1.length : word1.length-lengthDifference]
}

func mergeAlternately(word1 string, word2 string) string {
	result := ""

	word1Length := len(word1)
	word2Length := len(word2)
	lengthDifference := word1Length - word2Length
	smallerWord := word1

	if word2Length < word1Length {
		smallerWord = word2
	}

	remaining := getRemaining(GetRemaining{
		word1:            WordData{word: word1, length: word1Length},
		word2:            WordData{word: word2, length: word2Length},
		lengthDifference: lengthDifference,
	})

	for i := range len(smallerWord) {
		result += string(word1[i]) + string(word2[i])
	}

	result += remaining

	return result
}

func main() {
	result := mergeAlternately("abc", "defgh")
	println(result)
}
