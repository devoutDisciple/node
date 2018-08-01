const config = require("../config/sqlConfig");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: config.dialect,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},

	// SQLite only
	storage: "path/to/database.sqlite",

	// http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
	operatorsAliases: false
});

// const User = sequelize.define("user", {
// 	username: Sequelize.STRING,
// 	birthday: Sequelize.DATE
// });

// sequelize.sync()
// 	.then(() => User.create({
// 		username: "janedoe",
// 		birthday: new Date(1980, 6, 20)
// 	}))
// 	.then(jane => {
// 		console.log(jane.toJSON());
// 	});

module.exports = sequelize;
