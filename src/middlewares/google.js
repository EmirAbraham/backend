const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// Database
const { Userdev } = require("../db.js");

// Helpers
const { normalizeNickname } = require("../helpers/nicknameHelper.js");
const { generateRandomPassword } = require("../helpers/randomPasswordHelper.js");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:
                "https://backend-production-c946.up.railway.app/auth/google/callback",
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            
            Userdev.findOrCreate({
                where: {
                    email: profile.email,
                },
                defaults: {
                    name: profile.displayName,
                    nickName: normalizeNickname(profile.given_name, profile.family_name),
                    image: profile.picture,
                    password: generateRandomPassword(),
                    provider: profile.provider
                },
            }).then((user) => done(null, user));
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});