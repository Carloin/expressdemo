/*
 * @Author: hft
 * @Date: 2022-03-22 14:11:05
 * @LastEditors: hft
 * @LastEditTime: 2022-03-23 15:11:13
 * @Description: file content
 */
// 导入模型
const { createModel, listModel } = require(process.cwd() + "/models/stu");

const createStu = async (req, res) => {
  //   res.send("this is stu create");
  //   1.接收数据
  let postData = req.body;
  //    2.过滤数据
  //   3.操作数据库
  let rs = await createModel(postData);
  // 4.判断返回
  if (rs) {
    res.send({
      meta: {
        state: 200,
        msg: "添加成功",
      },
      data: null,
    });
  } else {
    res.send({
      meta: {
        state: 500,
        msg: "添加失败",
      },
      data: null,
    });
  }
};
const getStu =async (req, res) => {
  // 1.获取数据
  let data = await listModel();
  // 2.响应数据
  res.send({
    meta: {
      state: 200,
      msg: "查询成功",
    },
    data: data,
  });
};
module.exports = {
  createStu,
  getStu,
};
