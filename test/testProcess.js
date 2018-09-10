console.log(process.argv);
const [a, b, ...c] = process.argv;
console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(c);
console.log(c.toString());
