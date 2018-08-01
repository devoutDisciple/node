class V1Service {
	constructor() {
		this.name = "zhangzhen";
	}
	static hello1(req, res) {
		res.render("index", {
			name: "zhangzhen"
		});
	}
	static async hello2(req, res) {
		// console.log(123);
		// let num = await this.countNum();
		// console.log("num is " + num);
		res.send("hello world hello2");
	}
	// static countNum() {
	//   let num = 0;
	//   for(let i = 0; i < 10000; i++) {
	//     num++;
	//   }
	//   console.log("计算num中");
	//   return num;
	// }
}
module.exports = V1Service;
