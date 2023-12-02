package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()
	sc := bufio.NewScanner(file)

	//1 A : X Rock
	//2 B : Y Paper
	//3 C: Z Scissors

	score := 0
	scores := map[string]int{
		// outcome + shape
		"B X": 0 + 1,
		"C Y": 3 + 3,
		"A Z": 6 + 2,
		"A X": 0 + 3,
		"B Y": 3 + 2,
		"C Z": 6 + 1,
		"C X": 0 + 2,
		"A Y": 3 + 1,
		"B Z": 6 + 3,
	}
	for sc.Scan() {
		score += scores[sc.Text()]
	}
	fmt.Println(score)
}
