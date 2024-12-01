package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		log.Fatal("failed to open the file")
		return
	}

	var (
		left  []int64
		right []int64
	)

	defer file.Close()

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		input := strings.Split(scanner.Text(), "   ")
		a, _ := strconv.ParseInt(input[0], 10, 32)
		b, _ := strconv.ParseInt(input[1], 10, 32)
		left = append(left, a)
		right = append(right, b)
	}

	if err := scanner.Err(); err != nil {
		log.Fatal("error reading the file: ", err)
	}

	freq := make(map[int64]int64)
	for i := range left {
		_, ok := freq[right[i]]
		if ok {
			freq[right[i]]++
		} else {
			freq[right[i]] = 1
		}
	}

	var ans int64
	for _, val := range left {
		ans += val * freq[val]
	}

	fmt.Println("Ans: ", ans)
}
