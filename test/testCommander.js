const program = require("commander");
const shell = require("shelljs");

// 如命令: node testCommander.js -l hello -s world -d admin,使用program.list或输出hello
program
	.version("0.1.0")
	.option("-l, --list [list]", "Add list")
	.option("-s, --src [src]", "Add src")
	.option("-d, --dist [dist]", "Add dist")
	.parse(process.argv);

console.log(program.list);
console.log(program.src);
console.log(program.dist);

shell.echo("hello world");
shell.exec("node -v");
