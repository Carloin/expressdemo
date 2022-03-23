/*
 * @Author: hft
 * @Date: 2022-03-22 13:52:45
 * @LastEditors: hft
 * @LastEditTime: 2022-03-23 15:06:56
 * @Description: file content
 */
// 1.引入express模块
const express = require("express");
const bodyParser = require("body-parser");
// 2.创建app对象，用过语法express()  底层原理http模块的createServer
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// 3.路由，语法 app.HTTP请求(路径，回调函数)
app.get("/", (req, res) => {
  res.send("hello");
});
// process.cwd() 获取当前路径
const stuController = require(process.cwd() + `/controller/stu`);
//学生添加
app.post("/stu", stuController.createStu);
app.get("/stu", stuController.getStu);
// 4.启动服务监听端口
app.listen(3000, () => {
  console.log("启动服务");
});
