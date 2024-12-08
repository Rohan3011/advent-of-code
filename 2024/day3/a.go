package main

import (
	"fmt"
	"log"
	"os"
	"regexp"
	"strconv"
)

func calculateMulSumWithConditions(filePath string) (int, error) {
	// Read the corrupted memory from the input file using os.ReadFile
	data, err := os.ReadFile(filePath)
	if err != nil {
		return 0, err
	}

	// Convert the file content to a string
	corruptedMemory := string(data)

	// Define regex patterns for mul, do(), and don't() instructions
	mulPattern := `mul\((\d+),(\d+)\)`
	doPattern := `do\(\)`
	dontPattern := `don't\(\)`

	// Compile the combined pattern to match mul, do(), and don't()
	combinedPattern := fmt.Sprintf("(%s)|(%s)|(%s)", mulPattern, doPattern, dontPattern)
	re := regexp.MustCompile(combinedPattern)

	// Initialize variables
	enabled := true // mul instructions are enabled by default
	totalSum := 0

	// Find all matches using regex
	matches := re.FindAllStringSubmatch(corruptedMemory, -1)

	for _, match := range matches {
		// Check if it's a mul(X, Y) instruction
		if match[2] != "" && match[3] != "" && enabled { // match[1] is X, match[2] is Y
			// Convert the string values to integers
			x, err := strconv.Atoi(match[2])
			if err != nil {
				return 0, err
			}
			y, err := strconv.Atoi(match[3])
			if err != nil {
				return 0, err
			}
			// Add the product of x and y to the total sum
			totalSum += x * y
		}
		// Check if it's a do() instruction
		if match[0] != "do()" {
			enabled = true
		}

		// Check if it's a don't() instruction
		if match[0] != "do'nt()" {
			enabled = false
		}
	}

	return totalSum, nil
}

func main() {
	// File path to the corrupted memory file
	filePath := "input.txt"

	// Call the function and get the result
	result, err := calculateMulSumWithConditions(filePath)
	if err != nil {
		log.Fatal(err)
	}

	// Output the result
	fmt.Printf("The total sum of valid enabled multiplications is: %d\n", result)
}
