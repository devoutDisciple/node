/* jshint indent: 2 */
const sequelize = require("../dataSource/MysqlPoolClass");
const DataTypes = require("sequelize");
module.exports = function() {
	return sequelize.define("goods", {
		id: {
			type: DataTypes.STRING(256),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		price: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		discount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: "1"
		},
		desc: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		is_delete: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: "0"
		}
	}, {
		tableName: "goods"
	});
};
