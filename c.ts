const input = await Deno.readTextFile("c.txt");
const rucksacks = input.split(/\r?\n/);
// console.log(rucksacks);

function charToInt(char: string) {
  const isUpper = char === char.toUpperCase();
  const code = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
  return char.charCodeAt(0) - code + (isUpper ? 27 : 1);
}

function calcPriority(s: string): number {
  let sum = 0;
  for (const u of s) {
    sum += charToInt(u);
  }
  return sum;
}

function main() {
  let score = 0;
  for (let i = 0; i < rucksacks.length; i += 3) {
    let shared = "";
    for (const u of rucksacks[i]) {
      if (
        rucksacks[i + 1].includes(u) &&
        rucksacks[i + 2].includes(u) &&
        !shared.includes(u)
      )
        shared += u;
    }
    score += calcPriority(shared);
  }
  console.log("Score: ", score);
}

main();
