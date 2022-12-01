const input = await Deno.readTextFile("a.txt");
const calories = input.split(/\r?\n/);
console.log(calories);

let sum = 0;
const elves = [];

for (const val of calories) {
  if (val === "") {
    elves.push(sum);
    sum = 0;
  } else {
    sum += parseInt(val);
  }
}
elves.push(sum);
elves.sort((a, b) => b - a);

const topThreeElves = elves.slice(0, 3);
const totalCalories = topThreeElves.reduce((prev, curr) => prev + curr);
console.log(totalCalories);
