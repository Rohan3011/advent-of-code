package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	sc := bufio.NewScanner(file)
	overlapCount := 0
	for sc.Scan() {
		var a, b, x, y int
		fmt.Sscanf(sc.Text(), "%d-%d,%d-%d", &a, &b, &x, &y)
		if (b >= x && a <= y) || (y >= a && x <= b) {
			overlapCount++
		}
	}
	fmt.Printf("count: %d\n", overlapCount)
}
