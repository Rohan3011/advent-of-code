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

const kv = new Map<string, MOVES>([
  ["A", MOVES.ROCK],
  ["B", MOVES.PAPER],
  ["C", MOVES.SCISSORS],
  ["X", MOVES.ROCK],
  ["Y", MOVES.PAPER],
  ["Z", MOVES.SCISSORS],
]);

const winningCombinations = new Map<MOVES, MOVES>([
  [MOVES.ROCK, MOVES.PAPER],
  [MOVES.PAPER, MOVES.SCISSORS],
  [MOVES.SCISSORS, MOVES.ROCK],
]);

// Calculates outcome for player 1
function calcOutcome(player1: string, player2: string) {
  const player1Move = kv.get(player1);
  const player2Move = kv.get(player2);
  if (player1Move && winningCombinations.get(player1Move) == player2Move) {
    return OUTCOMES.WIN;
  } else if (player1Move == player2Move) {
    return OUTCOMES.DRAW;
  } else {
    return OUTCOMES.LOSE;
  }
}

function main() {
  let score = 0;
  for (const moves of rounds) {
    const [opponent, you] = moves.split(" ");
    score += kv.get(you) ?? 0;
    score += calcOutcome(opponent, you);
  }
  console.log("Score: ", score);
}

main();
