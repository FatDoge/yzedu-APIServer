var express = require('express');
var router = express.Router();
var URL = require('url');
var Sclass = require('./msgtype');

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

  /* GET home page. */
router.get('/', function(req, res, next) {
  
    var sclass = new Sclass();
    var params = URL.parse(req.url, true).query;
    if(params.id==1){
      sclass.img = "1.jpg";
      sclass.classname = "古生物演化";
      sclass.school = "中国地质大学";
      sclass.teacher = "孙克勤";
      sclass.info = "古生物演化是古生物学的一个分支，主要研究生物的起源和进化的规律。从地球生命的出现到人类的出现和发展，经历了约35亿年的地史时期。生物演化史既是系统发育的历史，又是不断适应环境、扩大生存空间的过程。系统发育包括从无到有的起源，从少到多的分支发展和从低级到高级的阶段发展。每一新类型的出现，都是一次重大的飞跃，在生物演化史上曾经有过多次重大的飞跃。";
    }
    else if(params.id==2){
        sclass.img = "2.jpg";
        sclass.classname = "中国近代史纲要";
        sclass.school = "杭州电子科技大学";
        sclass.teacher = "赵四";
        sclass.info = "本课程旨在培养学生运用正确的历史观和历史唯物主义方法发现问题、分析问题和解决问题的能力，为学生后续课程的顺利学习提供一定的条件，并为学生日后从事相关领域的工作和研究奠定扎实的历史理论基础。";
    }
    else {
        sclass.img = "0.jpg";
        sclass.classname = "开学第一课";
        sclass.school = "杭州电子科技大学";
        sclass.teacher = "王一";
        sclass.info = "text";

        
    }
    
  
    var response = {status:1,data:sclass};
    responseJSON(res, response);
  
  
  });
  
  module.exports = router;