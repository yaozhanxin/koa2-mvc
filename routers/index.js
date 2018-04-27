/**
 * 整合所有子路由
 */

const router = require("koa-router")();

const demoRouter = require("./demoRouter");

router.use("/demo", demoRouter.routes(), demoRouter.allowedMethods());

module.exports = router;
