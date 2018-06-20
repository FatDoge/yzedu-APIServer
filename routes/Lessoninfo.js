var express = require('express');
var router = express.Router();
var URL = require('url');

function Linfo(){
    var video;
    var info;
    var outline;
    var knowledge;
    var reference;
}

router.get('/', function(req, res, next) {
    var params = URL.parse(req.url, true).query;
    var linfo = new Linfo();
    if(params.id==1){
        linfo.video = 'videoURL';
        linfo.info = '';
        linfo.outline='';
        linfo.knowledge='';
        linfo.reference='';
    }
    else{
        linfo.video = 'videoURL';
        linfo.info = '本课程既有美学理论的阐释，又有美的现象和形态的生动呈现和具体分析，帮助学生理解审美理想和情趣，贴近他们的审美关怀，与他们一起解答审美疑问，增长美学知识，从而提升审美修养和素质。课程由五个部分组成：';
        linfo.outline= "";
        linfo.knowledge='无';
        linfo.reference='1.《美育十五讲》（曾繁仁著）   2.《美的历程》（李泽厚著）  3.《西方美学史》（朱光潜）';
    }

    responseJSON(res, linfo);

});


var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200', msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
  };

module.exports = router;