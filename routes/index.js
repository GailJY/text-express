/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-08-22 10:34:37
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-08-22 14:20:38
 * @FilePath: \text-express\routes\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;
