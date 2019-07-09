const Support = require("./models").Support;

module.export = {

  getAllSupports(callback){
    Support.findAll().then((supports) => {
      return callback(null, supports);
    }).catch((err) => {
      return callback(err);
    })
  }
}
