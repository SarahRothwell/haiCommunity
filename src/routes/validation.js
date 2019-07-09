
module.exports = {

  validateUsers(req, res, next) {

    if(req.method === "POST") {
      req.checkBody("email", "must be valid").isEmail();
      req.checkBody("password", "must be at least 6 characters in length").isLength({min: 6})
      req.checkBody("passwordConfirmation", "must match password provided").optional().matches(req.body.password);
    }

    const errors = req.validationErrors();
    console.log(errors);
    //needs to be fixed for alerting user when registration failed
    if (errors) {
      return next(errors);
      //res.status(422).send({error: "does not meet minimal information requirements to set up account"});
    } else {
      return next();
    }
  }

}
