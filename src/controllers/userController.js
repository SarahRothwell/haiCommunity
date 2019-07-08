const userQueries = require("../db/queries.users.js");
const passport = require("passport");

module.exports = {


  /*testing script
  register(req, res, next){
    res.send("User registration page is running......");
  }
  */

  create(req, res, next){
  //  console.log(req.body);
    let newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };


    userQueries.createUser(newUser, (err, user) => {
      if(err){
        res.status(400).send({error: "create user failed"});
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send("Create user successful");
        })
      }
    });
  },

  signIn(req, res, next){
  passport.authenticate("local")(req, res, function () {
    if(!req.user){
      //req.flash("notice", "Sign in failed. Please try again.")
      res.status(400).send({error: "sign in failed"});
      //res.redirect("/users/sign_in");
    } else {
      res.send("user sign in successful");
      //req.flash("notice", "You've successfully signed in!");
      //res.redirect("/");
      }
    })
  }

}
