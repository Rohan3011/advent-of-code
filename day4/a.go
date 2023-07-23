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
	fullyContainedCount := 0
	for sc.Scan() {
		var a, b, x, y int
		fmt.Sscanf(sc.Text(), "%d-%d,%d-%d", &a, &b, &x, &y)
		if (a <= x && b >= y) || (x <= a && y >= b) {
			fullyContainedCount++
		}
	}
	fmt.Printf("count: %d\n", fullyContainedCount)
}
