package main

import (
	"bufio"
	"fmt"
	"log"
	"math"
	"os"
	"strconv"
	"strings"
)

func isValid(arr []int) bool {

	ok, onlyAscend, onlyDescend := true, true, true

	for i := 0; i < len(arr)-1; i++ {
		diff := arr[i+1] - arr[i]
		if diff > 0 {
			onlyDescend = false
		} else {
			onlyAscend = false
		}

		if math.Abs(float64(diff)) < 1 || math.Abs(float64(diff)) > 3 {
			ok = false
		}
	}
	return ok && (onlyAscend || onlyDescend)
}

func isSafe(arr []int) bool {

	for i := 0; i < len(arr); i++ {
		subArr := append([]int{}, arr[:i]...)
		subArr = append(subArr, arr[i+1:]...)

		if isValid(subArr) {
			return true
		}
	}
	return false
}

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		log.Fatalf("Error opening file: %v\n", err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	safeCount := 0

	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" {
			continue
		}

		// Parse the line into an integer slice
		parts := strings.Fields(line)
		var arr []int
		for _, part := range parts {
			num, err := strconv.Atoi(part)
			if err != nil {
				fmt.Printf("Skipping invalid number: %s\n", part)
				continue
			}
			arr = append(arr, num)
		}

		if len(arr) == 0 {
			continue
		}

		// Check if the array is safe
		if isSafe(arr) {
			safeCount++
		}
	}

	if err := scanner.Err(); err != nil {
		log.Fatalf("Error reading the file: %v\n", err)
	}

	fmt.Printf("Total safe arrays: %d\n", safeCount)
}
