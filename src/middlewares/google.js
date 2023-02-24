const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const { userDev } = require("../db.js");

const emails = ["jimenezgalvezeduardo@gmail.com"];

const authGoogle = passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/signup/google",
    },
    function (accessToken, refreshToken, profile, cb) {
      const response = emails.includes(profile.emails[0].value);

      if (response) {
        done(null, profile);
      } else {
        emails.push(profile.emails.value);
        done(null, profile);
      }
    }
  )
);
module.exports = { authGoogle };
