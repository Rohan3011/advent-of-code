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
		"B X": 1,
		"C Y": 2,
		"A Z": 3,
		"A X": 4,
		"B Y": 5,
		"C Z": 6,
		"C X": 7,
		"A Y": 8,
		"B Z": 9,
	}
	for sc.Scan() {
		score += scores[sc.Text()]
	}
	fmt.Println(score)
}
