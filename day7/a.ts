const input = await Deno.readTextFile("g.txt");
const data = input.trim().split("\n$");
const LIMIT = 100000;
console.log(data);

const kv: Record<string, number> = {};

function main() {
  let total = 0,
    pwd = "";

  for (const s of data) {
    const x = s.split(" ");
    if (x[0] == "$") {
      if (x[1] == "cd") {
        if (x[2] == "..") pwd = pwd.slice(0, -1);
        else pwd += x[2];
      }
      if (x[1] == "ls") continue;
    } else if (x[0] == "dir") continue;
    else {
      kv[pwd] = (Object.keys(kv).includes(pwd) ? kv[pwd] : 0) + parseInt(x[0]);
    }
  }
  //   console.log(kv);

  const dirs: Record<string, number> = {};
  for (let x in kv) {
    for (let u of x) {
      dirs[u] = (Object.keys(dirs).includes(u) ? dirs[u] : 0) + kv[x];
    }
  }

  console.log(dirs);
  for (let x in dirs) {
    if (dirs[x] <= LIMIT) total += dirs[x];
  }
  console.log("Total: ", total);
}

main();
