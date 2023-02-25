const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const { Userdev } = require('../db.js')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
    passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {

        Userdev.findOrCreate({ 
          where: { 
            email: profile.email 
          }, 
          defaults: {
            name: profile.displayName,
            nickName: `${profile.given_name}_${profile.family_name}`,
            image: profile.picture,
            password: profile.email,
            // provider: profile.provider
          } 
        }).then( user => done(null, user));

    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
})