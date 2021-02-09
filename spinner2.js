let spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 100;

spinner.forEach((e) => {
  setTimeout(() => {
    process.stdout.write(`\r${e}   `);
  }, time);
  time += 200;
});
