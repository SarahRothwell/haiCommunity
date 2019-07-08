module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const supportRoutes = require("../routes/support");

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(supportRoutes);
  }
}
