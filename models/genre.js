/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-08-22 10:37:33
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-08-22 10:37:59
 * @FilePath: \text-express\models\genre.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// Virtual for this genre instance URL.
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

// Export model.
module.exports = mongoose.model("Genre", GenreSchema);