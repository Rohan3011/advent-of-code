package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {

	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	maxCalories, currentElfCalories := 0, 0

	for scanner.Scan() {
		line := scanner.Text()
		if line == "" {
			if maxCalories < currentElfCalories {
				maxCalories = currentElfCalories
			}
			currentElfCalories = 0
		} else {
			calories, _ := strconv.Atoi(line)
			currentElfCalories += calories
		}
	}

	fmt.Println(maxCalories)
}
