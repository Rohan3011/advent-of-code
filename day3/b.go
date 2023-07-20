package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"unicode"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		log.Fatal(err)
	}

	sc := bufio.NewScanner(file)
	sum := 0

	var arr []string

	for sc.Scan() {
		arr = append(arr, sc.Text())
	}

	for i := 0; i < len(arr); i += 3 {
		r, err := commonEl(arr[i], arr[i+1], arr[i+2])
		if err != nil {
			continue
		}
		sum += getPrority(r)
	}

	fmt.Println(sum)
}

func commonEl(a, b, c string) (rune, error) {

	mp1 := map[rune]bool{}
	mp2 := map[rune]bool{}

	for _, r := range a {
		mp1[r] = true
	}

	for _, r := range b {
		mp2[r] = true
	}

	for _, r := range c {
		if mp1[r] && mp2[r] {
			return r, nil
		}
	}

	return '_', fmt.Errorf("Not common")
}

func getPrority(r rune) int {
	p := int(unicode.ToLower(r) - 96)
	if unicode.IsUpper(r) {
		p += 26
	}
	return p
}
