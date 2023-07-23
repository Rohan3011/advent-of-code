const input = await Deno.readTextFile("input.txt");
const pairs = input.trim().split(/\r?\n/);

function main() {
  let overlapCount = 0;
  pairs.map((s) => {
    const sections = s.split(/,|-/);
    const [a, b, x, y] = sections.map(Number);
    if ((b >= x && a <= y)|| (y >= a && x <= b)){
      overlapCount++;
    }
  });
  console.log("overlap count: ", overlapCount);
}

main();
