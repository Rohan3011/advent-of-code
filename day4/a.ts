const input = await Deno.readTextFile("input.txt");
const pairs = input.trim().split(/\r?\n/);

function main() {
  let count = 0;
  pairs.map((s) => {
    const sections = s.split(/,|-/);
    const [a, b, x, y] = sections.map(Number);
    if (!(b < x || y < a)) {
      count++;
    }
  });
  console.log("Count: ", count);
}

main();
