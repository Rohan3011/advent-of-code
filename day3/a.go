package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"
	"unicode"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		log.Fatal(err)
	}

	sc := bufio.NewScanner(file)
	sum := 0

	for sc.Scan() {
		s := sc.Text()
		s1 := s[0 : len(s)/2]
		s2 := s[len(s)/2:]
		for _, val := range s1 {
			if strings.Contains(s2, string(val)) {
				sum += getPriority(val)
				break
			}
		}
	}
	fmt.Println(sum)
}

func getPriority(r rune) int {
	p := int(unicode.ToLower(r) - 96)
	if unicode.IsUpper(r) {
		p += 26
	}
	return p
}
