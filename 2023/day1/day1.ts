import fs from "node:fs/promises";

async function getInput() {
  try {
    const data = await fs.readFile("./input.txt", { encoding: "utf8" });
    return data;
  } catch (err) {
    console.log(err);
  }
}

const digitsEnum: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const getDigits = (s: string): number => {
  const digits: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(Number(s[i]))) {
      digits.push(s[i]);
    }
    for (const [k, v] of Object.entries(digitsEnum)) {
      if (s.substring(i).startsWith(k)) {
        digits.push(v);
      }
    }
  }
  const num = Number(digits[0] + digits[digits.length - 1]);
  return num ? num : 0;
};

async function main() {
  const input = await getInput();
  const data = input?.replace(/\r/g, "").trim().split("\n");

  if (!data) {
    console.log("Invalid input");
    return;
  }

  let totalSum = 0;
  data.map((line) => {
    totalSum += getDigits(line);
  });
  console.log("sum", totalSum);
}

main();
