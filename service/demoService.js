const query = require("../utils/db");

const DemoService = {
  async getNameById(id) {
    let result = await query("SELECT * FROM user_info");

    return result;
  }
};
module.exports = DemoService;
