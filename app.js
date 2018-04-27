const Koa = require("koa");
const app = new Koa();
const logger = require("koa-logger");
const bodyparser = require("koa-bodyparser");
// 引入路由入口文件
const routers = require('./routers/index')

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);

// 记录请求响应时间
app.use(logger())

// 托管静态资源
app.use(require("koa-static")(__dirname + "/public"));

// 自定义记录器
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`请求方法： ${ctx.method} ; 请求路径：${ctx.url} ; - 所用时间：${ms}ms`);
});

// 使用路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000);
