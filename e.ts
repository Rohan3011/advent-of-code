const input = await Deno.readTextFile("e.txt");
const data = input.split(/\r?\n/);
const moves = data.map((s) => s.split(" "));
// console.log(moves);

// [N] [G]                     [Q]
// [H] [B]         [B] [R]     [H]
// [S] [N]     [Q] [M] [T]     [Z]
// [J] [T]     [R] [V] [H]     [R] [S]
// [F] [Q]     [W] [T] [V] [J] [V] [M]
// [W] [P] [V] [S] [F] [B] [Q] [J] [H]
// [T] [R] [Q] [B] [D] [D] [B] [N] [N]
// [D] [H] [L] [N] [N] [M] [D] [D] [B]
//  1   2   3   4   5   6   7   8   9
const state = [
  "",
  "DTWFJSHN",
  "HRPQTNBG",
  "LQV",
  "NBSWRQ",
  "NDFTVMB",
  "MDBVHTR",
  "DBQJ",
  "DNJVRZHQ",
  "BNHMS",
];

function main() {
  moves.map((s) => {
    const [_x, count, _y, src, _z, des] = s.map(Number);
    const left = state[src].slice(-1 * count);
    state[src] = state[src].slice(0, -1 * count);
    state[des] += left;
    // console.log(state);
  });
  let ans = "";
  state.map((s) => {
    if (s !== "") {
      ans += s[s.length - 1];
    }
  });
  console.log("Ans: ", ans);
}

main();
