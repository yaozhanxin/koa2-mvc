const DemoService = require('../service/demoService');
const { uploadFile } = require('../utils/upload')
const path = require('path');
const DemoController = {
  async getNameById(ctx, next) {
    let id = ctx.query.id;
    let name = await DemoService.getNameById(id);
    ctx.body = name;
  },
  async setAgeById(ctx, next) {
    let temp = ctx.request.body;
    await DemoService.setAgeById(ctx);
  },
  async setCookies(ctx, next) {
    ctx.cookies.set(
      'cid',
      'hello world', {
        domain: '127.0.0.1', // 写cookie所在的域名
        path: '/demo', // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2018-05-15'), // cookie失效时间
        httpOnly: false, // 是否只用于http请求中获取
        overwrite: false // 是否允许重写
      }
    )
    ctx.body = 'cookie is ok'
  },
  async uploadFile(ctx,next) {
    let result = { success: false }
    let serverFilePath = path.join( __dirname, '../public/upload-files')
    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'images', // common or album
      path: serverFilePath
    })
    ctx.body = result
  }
};



module.exports = DemoController;