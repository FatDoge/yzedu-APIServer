var express = require('express');
var router = express.Router();
var URL = require('url');

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
    var params = URL.parse(req.url, true).query;
    var liveinfo = new Liveinfo();

    if(params.id==1){
        liveinfo.img = "live.jpg";
        liveinfo.livename = "计算机网络";
        liveinfo.teacher = "龚子琴";
        liveinfo.price = "39.00";
    }
    else{
        liveinfo.img = "text.jpg";
        liveinfo.livename = "开学第一课";
        liveinfo.teacher = "王尼玛";
        liveinfo.price = "free";
    }
    responseJSON(res,liveinfo);
    
});

module.exports = router;
