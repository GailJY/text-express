/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-08-22 14:14:55
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-08-22 17:38:51
 * @FilePath: \text-express\controllers\authorController.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Author = require("../models/author");

const asyncHandler = require("express-async-handler");


// 显示完整的作者列表
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();

  console.log(allAuthors)
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});

// 为每位作者显示详细信息的页面
exports.author_detail = (req, res) => {
  res.send("未实现：作者详细信息：" + req.params.id);
};

// 由 GET 显示创建作者的表单
exports.author_create_get = (req, res) => {
  res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理作者创建操作
exports.author_create_post = (req, res) => {
  res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除作者的表单
exports.author_delete_get = (req, res) => {
  res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理作者删除操作
exports.author_delete_post = (req, res) => {
  res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新作者的表单
exports.author_update_get = (req, res) => {
  res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者更新操作
exports.author_update_post = (req, res) => {
  res.send("未实现：更新作者的 POST");
};