const input = await Deno.readTextFile("b.txt");
const rounds = input.split(/\r?\n/);

enum OUTCOMES {
  WIN = 6,
  LOSE = 0,
  DRAW = 3,
}
enum MOVES {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3,
}

const moves: Record<string, MOVES> = {
  A: MOVES.ROCK,
  B: MOVES.PAPER,
  C: MOVES.SCISSORS,
};
const outcomes: Record<string, OUTCOMES> = {
  X: OUTCOMES.LOSE,
  Y: OUTCOMES.DRAW,
  Z: OUTCOMES.WIN,
};

const winningCombinations: Record<MOVES, MOVES> = {
  [MOVES.ROCK]: MOVES.PAPER,
  [MOVES.PAPER]: MOVES.SCISSORS,
  [MOVES.SCISSORS]: MOVES.ROCK,
};

const losingCombinations: Record<MOVES, MOVES> = {
  [MOVES.PAPER]: MOVES.ROCK,
  [MOVES.SCISSORS]: MOVES.PAPER,
  [MOVES.ROCK]: MOVES.SCISSORS,
};

function calcMove(opponent: MOVES, end: OUTCOMES) {
  if (end == OUTCOMES.DRAW) return opponent;
  else if (end == OUTCOMES.WIN) return winningCombinations[opponent];
  else return losingCombinations[opponent];
}

function main() {
  let totalScore = 0;
  for (const u of rounds) {
    const [opponent, end] = u.split(" ");
    totalScore += calcMove(moves[opponent], outcomes[end]);
    totalScore += outcomes[end];
  }
  console.log("Total Score: ", totalScore);
}

main();
