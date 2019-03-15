/**
 * Created by eaTong on 2018/11/22 .
 * Description:
 */

const fs = require('fs-extra');
const path = require('path');

let config = {
  mysql: {
    user: "fully",
    password: "fully@123",
    database: "fully",
    host: "127.0.0.1"
  },
};

if (fs.existsSync(path.resolve(__dirname, 'server.config.production.js'))) {
  config = require("./server.config.production")
}


module.exports = config;
