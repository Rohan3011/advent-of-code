const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

function isValidNumber(
  row: number,
  start: number,
  end: number,
  lines: string[],
) {
  const isSpecialChar = (c: string) => c !== "." && !Number(c);

  for (let j = start; j <= end; j++) {
    if (row - 1 >= 0) {
      if (isSpecialChar(lines[row - 1][j])) return true;
    }
    if (row + 1 < lines.length) {
      if (isSpecialChar(lines[row + 1][j])) return true;
    }
  }

  for (let i = row - 1; i <= row + 1; i++) {
    if (i >= 0 && i < lines.length) {
      if (start - 1 >= 0) if (isSpecialChar(lines[i][start - 1])) return true;
      if (end + 1 < lines[row].length)
        if (isSpecialChar(lines[i][end + 1])) return true;
    }
  }

  return false;
}

function main() {
  let sum = 0;
  const lines = input.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let start = -1,
      end = -1;
    for (let j = 0; j < lines[i].length; j++) {
      if (Number(lines[i][j])) {
        if (start == -1) start = j;
        end = j;
      } else {
        sum += Number(isValidNumber(i, start, end, lines));
        // ? Number(lines[i].substring(start, end + 1))
        // : 0;
        start = -1;
      }
    }
  }

  console.log(sum);
}

main();
