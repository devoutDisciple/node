/* jshint indent: 2 */
const sequelize = require("../dataSource/MysqlPoolClass");
const DataTypes = require("sequelize");
module.exports = function() {
	return sequelize.define("administrator", {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		level: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: "1"
		},
		is_delete: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		}
	}, {
		tableName: "administrator"
	});
};
