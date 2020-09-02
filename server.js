const express = require("express"),
  path = require("path"),
  compression = require("compression"),
  session = require("express-session"),
  config = require("config"),
  passport = require("passport"),
  localStrategy = require("passport-local");

const app = express();

const connectDB = require("./config/db"),
  User = require("./models/user");

connectDB();

app.use(express.json({ extended: false }));
app.use(compression());
app.use(
  session({
    secret: config.get("secret"),
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/authenticated", require("./routes/authenticated"));
app.use("/login", require("./routes/sign-in"));
app.use("/logout", require("./routes/sign-out"));
app.use("/register", require("./routes/sign-up"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) throw error;
});
