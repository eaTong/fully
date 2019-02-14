/**
 * Created by eaTong on 2018/11/22 .
 * Description:
 */

let config = {
  mysql: {
    user: "fully",
    password: "fully@123",
    database: "fully",
    host: "127.0.0.1"
  },
};

if(process.env.NODEV_ENV === 'production'){
  config = require("./server.config.production")
}


module.exports = config;
