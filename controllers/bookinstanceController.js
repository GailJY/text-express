/*
 * @bookinstance: yejiayu gailjy@126.com
 * @Date: 2024-08-22 14:14:55
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-08-22 16:26:35
 * @FilePath: \text-express\controllers\bookinstanceController.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const BookInstance = require("../models/bookinstance");

// 显示完整的作者列表
exports.bookinstance_list = async function (req, res, next) {
  try {
    const list_bookinstances = await BookInstance.find()
      .populate("book")
      .exec();
    // Successful, so render
    res.render("bookinstance_list", {
      title: "Book Instance List",
      bookinstance_list: list_bookinstances,
    });
  } catch (err) {
    // Handle the error
    return next(err);
  }
};

// 为每位作者显示详细信息的页面
exports.bookinstance_detail = (req, res) => {
  res.send("未实现：作者详细信息：" + req.params.id);
};

// 由 GET 显示创建作者的表单
exports.bookinstance_create_get = (req, res) => {
  res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理作者创建操作
exports.bookinstance_create_post = (req, res) => {
  res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除作者的表单
exports.bookinstance_delete_get = (req, res) => {
  res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理作者删除操作
exports.bookinstance_delete_post = (req, res) => {
  res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新作者的表单
exports.bookinstance_update_get = (req, res) => {
  res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者更新操作
exports.bookinstance_update_post = (req, res) => {
  res.send("未实现：更新作者的 POST");
};