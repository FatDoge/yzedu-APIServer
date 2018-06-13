var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var userSQL = require('../db/userSql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200', msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
// 用户登录
router.get('/', function (req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数  
        var param = req.query || req.params;
        // 建立连接 增加一个用户信息 
        connection.query(userSQL.isUser, [param.username,param.password], function (err, result) {
            //登陆成功返回个人信息
            console.log(result[0]["COUNT(*)"]);
            if (result[0]["COUNT(*)"]) {
                connection.query(userSQL.getUserInfo, [param.username], function (err, result) {
                    console.log(result);
                    if (result) {
                        result = {
                            status: 200,
                            msg: '登录成功',
                            data:result
                        };
                    }else{
                        result = {
                            status: 201,
                            msg: '登录失败',
                        };
                    }

                    // 以json形式，把操作结果返回给前台页面     
                    responseJSON(res, result);

                    // 释放连接  
                    connection.release();

                });
            }else{
                res.json({
                    status: 201, msg: '登录失败'
                });
                // 释放连接  
                connection.release();
            }
        })

    });
});
module.exports = router;