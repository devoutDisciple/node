# 本项目使用mysql作为永久化存储服务器，搭载在阿里云服务器上

使用sequelize作为node的orm框架，使用sequelize-auto自动生成models,地址：https://www.npmjs.com/package/sequelize-auto

参考命令：
sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -p 5432 -x my_password -e postgres

sequelize-auto -o "./models" -d eleme -h localhost -u root -p 3306 -x admin

项目中用到了shelljs以及commander...
