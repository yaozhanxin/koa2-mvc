const allConfig = require("../config")
const config = allConfig.database

const mysql = require("mysql");
// 创建数据池
const pool = mysql.createPool({
  host: config.HOST, // 数据库地址
  user: config.USERNAME, // 数据库用户
  password: config.PASSWORD, // 数据库密码
  database: config.DATABASE // 选中数据库
});

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) resolve(err);
      connection.query(sql, values, (error, results, fields) => {
        if (err) reject(err);
        resolve(results);
        connection.release();
      });
    });
  });
};

module.exports = query;
