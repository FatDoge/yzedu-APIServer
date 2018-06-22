var express = require('express');
var router = express.Router();
var URL = require('url');

// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var userSQL = require('../db/userSql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

function Liveinfo(){
    var img;
    var livename;
    var teacher;
    var price;
}

var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200', msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
  };

/* GET home page. */
router.get('/', function(req, res, next) {
    
    pool.getConnection(function(err, connection){
        // 获取前台页面传过来的参数  
        var param = req.query || req.params;
        connection.query(userSQL.isLive,[param.id],function(err, result){
            //打印信息到控制台
            console.log(result[0]["COUNT(*)"]);
            if(result[0]["COUNT(*)"]){
                connection.query(userSQL.getLive,[param.id],function(err, result){
                    if(result){
                        result = {
                            status: 200,
                            msg:'欢迎',
                            data:result
                        };
                    }else{
                        result = {
                            status: 201,
                            msg: '查无此课',
                        };
                    }
                    responseJSON(res, result);

                    connection.release();

                })
            }else{
                res.json({
                    status: 201, msg: '查无此课'
                });
                connection.release();
            }
        });

    });

    
});

module.exports = router;
