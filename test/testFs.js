const program = require("commander");
const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

let type = "node";
// 如命令: node testCommander.js -l hello -s world -d admin,使用program.list或输出hello
program
	.version("0.1.0")
	.option("-s, --src [src]", "Add src")
	.option("-d, --dist [dist]", "Add dist")
	.option("-t, --type [type]", "Add type")
	.parse(process.argv);
console.log(program.list);
console.log(program.src);
console.log(program.type);
const srcDir = path.resolve(__dirname, program.src);
const distDir = path.resolve(__dirname, program.dist);
program.type ? type = program.type : null; // 决定使用node方式或者shell的方式
const consoleByMe = (data) => {
	console.info(chalk.yellow(data));
};

const generateDist = (type) => {
	if(type === "node") {

		const removeDir = (dirPath) => {
			const files = fs.readdirSync(dirPath, {encoding: "utf8"});
			if(files.length == 0) return fs.rmdirSync(dirPath);
			files.forEach((file) => {
				fs.unlinkSync(path.resolve(dirPath, file));
				consoleByMe(`${file} was removed`);
			});
			fs.rmdirSync(dirPath);
			consoleByMe("the dir already is removed");
		};
			// const removeDirByShell = (dirPath) => {
			// 	shell.exec(`rm -rf ${dirPath}`);
			// 	shell.echo(`${dirPath} 已经被删除`);
			// };
		const _isExist = fs.existsSync(distDir);
		if(_isExist) removeDir(distDir);
		fs.mkdirSync(distDir);
		const files = fs.readdirSync(srcDir, {encoding: "utf8"});
		if(files.length == 0) throw new Error("the dir has not files");

		files.forEach(fileName => {
			const data = fs.readFileSync(path.resolve(srcDir, fileName), {encoding: "utf8"});
			fs.writeFileSync(path.resolve(distDir, fileName), data, {encoding: "utf8"});
			consoleByMe(`${fileName} already is created`);
		});
		return;
	}
	consoleByMe("shell will invoking");
	shell.exec(`rm -rf ${distDir}`);
	consoleByMe(`the first command of shell is rm -rf ${distDir}`);
	shell.exec(`cp ${srcDir} ${distDir}`);
	consoleByMe(`the last shell command is cp ${srcDir} ${distDir}`);
	consoleByMe("shell is done");
};
generateDist(type);












