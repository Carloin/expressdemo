/*
 * @Author: hft
 * @Date: 2022-03-23 10:10:21
 * @LastEditors: hft
 * @LastEditTime: 2022-03-23 15:08:22
 * @Description: file content
 */
//1.导入模块
const mongoose = require("mongoose");
// 2.链接数据库
const db = mongoose.createConnection(
  "mongodb://hft:hft@localhost:27017/admin",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("-----------------------");
      console.log("数据库链接失败", err);
      console.log("-----------------------");
      return;
    }
    console.log("数据库连接成功");
  }
);
// 3.设置数据模型（声明是哪个集合，限制字段个数和字段类型）;没放数据，数据库自动维护为stus
const model = db.model("stu", {
  uname: { type: String, default: "123qqq" },
  age: { type: Number },
  sex: { type: String },
});
const createModel = (postData) => {
  const insertObj = new model(postData);
  return insertObj
    .save()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("插入失败" + err);
      return false;
    });
};
const listModel = () => {
  return model
    .find()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("查询失败" + err);
      return [];
    });
};
module.exports = {
  createModel,
  listModel,
};
