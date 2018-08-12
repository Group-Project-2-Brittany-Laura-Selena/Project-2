
var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
// var path = require("path");

// // Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
//these get requests are for the user, not the artist. Here they can search for local talent they'd like to hire
  app.get("/", function (req, res) {
    res.render("home", {
    });
  });

  app.get("/results", function (req, res){
    res.render("results", {
    })
  })
//these get requests are for the artist to make and login to their profiles. 
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
      res.redirect("/talent");
    } else {
      res.render("login");
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
// //original master
//   app.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/members.html"));

//   });

});
}
