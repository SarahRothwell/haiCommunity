const supportQueries = require("../db/queries.supports.js");
const Support = require("../db/models").Support;

module.exports = {


/*//testing script to verify api is working without use of database
  showAll(req, res, next){
    //res.send("Support page is running......");
    res.json([{
     	id: 1,
     	name: "samsepi0l"
     }, {
     	id: 2,
     	name: "D0loresH4ze"
     }]);
}
*/

  showAll(req, res, next){
    Support.findAll()
    .then((supports) => {
      //console.log(supports);
      res.send({supports});
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err);
    })
  }


}
