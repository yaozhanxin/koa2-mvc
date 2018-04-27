const router = require("koa-router")();

const DemoController = require("../controller/demoController");

const routers = router
  .get("/getNameById", DemoController.getNameById)
  .post("/setAgeById", DemoController.setAgeById)
  .get("/setCookies", DemoController.setCookies)
  .post("/uploadFile", DemoController.uploadFile)

module.exports = routers;
