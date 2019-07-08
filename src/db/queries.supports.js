const support = require("./models").Support;

module.export = {

  getAllSupports(callback){
    return Support.all()

    .then((supports) => {
      callback(null, supports);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
