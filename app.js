const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const sessionParser = require("express-session");
const bodyParser = require("body-parser");
const router = require("./routers/index");
/* global __dirname */
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
app.set("view engine", "jade");// 设置jade为模板引擎
app.set("views", path.resolve(__dirname, "views"));// 指定模板引擎的路径
// app.use(express.static("./views"));
app.use(logger("dev"));

router(app);

const server = app.listen(3001, () => {
	console.log(server);
	console.log("server is listenning 3001");
});
