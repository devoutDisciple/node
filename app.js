const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const chalk = require("chalk");
const cookieParser = require("cookie-parser");
const sessionParser = require("express-session");
const bodyParser = require("body-parser");
const router = require("./routers/index");
const favicon = require("serve-favicon");
/* global __dirname */

// 解析cookie和session还有body
app.use(cookieParser()); // 挂载中间件，可以理解为实例化
app.use(sessionParser({
	"secret": "ruidoc",     // 签名，与上文中cookie设置的签名字符串一致，
	"cookie": {
		"maxAge": 90000
	},
	"name": "session_id"    // 在浏览器中生成cookie的名称key，默认是connect.sid
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//设置icon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));


// 设置模板引擎
app.set("view engine", "jade");// 设置jade为模板引擎
app.set("views", path.resolve(__dirname, "views"));// 指定模板引擎的路径
// app.use(express.static("./views"));

// 打印日志
app.use(logger(":method :url :status :res[content-length] - :response-time ms"));

// 设置静态区
app.use(express.static("public"));

app.all("*", (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", "3.2.1");
	next();
});

// 路由
router(app);

// 监听3001端口
const server = app.listen(3001, () => {
	console.log(chalk.yellow(server));
	console.log(chalk.yellow("server is listenning 3001"));
});
