const input = await Deno.readTextFile("f.txt");
const stream = input.trim();

const DISTINCT = 14;

function main() {
  for (let i = 0; i + DISTINCT <= stream.length; i++) {
    const s = stream.substring(i, i + DISTINCT);
    const isUnique = [...new Set(s)].length == s.length;
    if (isUnique) {
      console.log("Ans: ", i + DISTINCT);
      return;
    }
  }
  console.log("No ans");
}

main();
