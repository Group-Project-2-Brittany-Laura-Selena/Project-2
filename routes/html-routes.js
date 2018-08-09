var db = require("../models");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the talent page
    if (req.user) {
      res.redirect("/");
    } else {
      res.render("login");
    }
  });

  app.get("/", function (req, res) {
    if (req.user) {
      db.User.findAll({}).then(function (dbUsers) {
        res.render("home", {
          msg: "Welcome!",
          users: dbUsers
        });
      });
    } else {
      res.redirect("/login");
    }
  });

  // Load talent page and pass in an talent by id
  app.get("/talent/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (User) {
      res.render("user", {
        user: User
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};
