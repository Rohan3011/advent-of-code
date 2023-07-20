package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()
	sc := bufio.NewScanner(file)

	sum := 0
	calories := []int{}

	for sc.Scan() {
		if sc.Text() == "" {
			calories = append(calories, sum)
			sum = 0
		} else {
			num, _ := strconv.Atoi(sc.Text())
			sum += num
		}
	}

	sort.Slice(calories, func(i, j int) bool {
		return calories[i] >= calories[j]
	})

	fmt.Println(calories[0] + calories[1] + calories[2])
}
