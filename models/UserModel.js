const Sequelize = require("sequelize");
const sequelize = require("../dataSource/MysqlPoolClass");

const User = sequelize.define("User", {
	username: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.INTEGER
	}
});
// User.sync({force: true}).then((res) => {
// 	console.log(res);
// 	return User.create({
// 		username: "zhangzhen",
// 		password: "zz941025",
// 		age: 13
// 	});
// });

// User.create({
// 	username: "wanger",
// 	password: "uiii",
// 	age: 18
// });



module.exports = User;
