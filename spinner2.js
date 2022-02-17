process.stdout.write("hello from spinner1.js... \rheyyy\n");
let string = "|/-\|/-\|";
let delay = 100;

for(let i = 0; i < string.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r" + string[i]);
  }, delay += 200)
}