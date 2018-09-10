/* jshint indent: 2 */
const sequelize = require("../dataSource/MysqlPoolClass");
const DataTypes = require("sequelize");
module.exports = function() {
	return sequelize.define("shops", {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		address: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		is_delete: {
			type: DataTypes.STRING(45),
			allowNull: false,
			defaultValue: "0"
		}
	}, {
		tableName: "shops"
	});
};
