const passport = require('passport');
const fbp = require('passport-facebook');

const User = require('../src/models/user.js');

// set up passport configs
passport.use(new fbp.Strategy({
  clientID: '159041831545773',
  clientSecret: 'e10d0dfced731e7a3f2c350aec46c0a6',
  callbackURL: '/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done) {
  User.findOne({
    'fbid': profile.id
  }, function(err, user) {
    if (err) return done(err);

    if (!user) {
      user = new User({
        name: profile.displayName,
        fbid: profile.id,
        dorm: '',
        room: '',
        searchHistory: []
      });

      user.save(function(err) {
        if (err) console.log(err);

        return done(err, user);
      });
    } else {
      return done(err, user);
    }
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = passport;