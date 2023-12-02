// [D]                     [N] [F]
// [H] [F]             [L] [J] [H]
// [R] [H]             [F] [V] [G] [H]
// [Z] [Q]         [Z] [W] [L] [J] [B]
// [S] [W] [H]     [B] [H] [D] [C] [M]
// [P] [R] [S] [G] [J] [J] [W] [Z] [V]
// [W] [B] [V] [F] [G] [T] [T] [T] [P]
// [Q] [V] [C] [H] [P] [Q] [Z] [D] [W]
//  1   2   3   4   5   6   7   8   9

const crates = [
  "",
  "QWPSZRHD",
  "VBRWQHF",
  "CVSH",
  "HFG",
  "PGJBZ",
  "QTJHWFL",
  "ZTWDLVJN",
  "DTZCJGHF",
  "WPVMBH",
];

function rearrangeCrates(moves: string[][]): string {
  moves.map((move) => {
    const [_a, count, _b, src, _c, dest] = move.map(Number);
    const result = crates[src].slice(-1 * count);
    crates[src] = crates[src].slice(0, -1 * count);
    crates[dest] += result;
  });

  let ans = "";
  crates.map((c) => (c ? (ans += c.at(-1)) : null));
  return ans;
}

async function main() {
  const input = await Deno.readTextFile("input.txt");
  const data = input.split(/\n/);
  const moves = data.map((s) => s.split(" "));
  const ans = rearrangeCrates(moves);
  console.log("Ans: " + ans);
}

main();
