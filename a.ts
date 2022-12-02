const input = await Deno.readTextFile("a.txt");
const calories = input.replace(/\r/g, "").trim().split(/\n\n/);

const elves = [];
for (const c of calories) {
  const temp = c.split("\n").map(Number);
  const sum = temp.reduce((prev, curr) => prev + curr, 0);
  elves.push(sum);
}
elves.sort((a, b) => b - a);

const topThreeElves = elves.slice(0, 3);
const totalCalories = topThreeElves.reduce((prev, curr) => prev + curr);
console.log(totalCalories);
