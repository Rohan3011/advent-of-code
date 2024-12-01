package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		panic("Failed to open the file")
	}

	defer file.Close()

	sc := bufio.NewScanner(file)
	for sc.Scan() {
		row := sc.Text()
		var num string
		var arr []string
		for _, c := range row {
			if c == '.' {
				append(arr, num)
				num = ""
			} else {
				num += string(c)
			}
		}
	}
}
