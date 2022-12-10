// auth.js
const  passport = require("passport");
const  passportJWT = require("passport-jwt");
const  userService = require("../services/userService");
const  cfg = require("../config/configs");
const  ExtractJwt = passportJWT.ExtractJwt;
const  Strategy = passportJWT.Strategy;
const  params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Bearer")
};

module.exports = function() {
  const  strategy = new Strategy(params, function(payload, done) {
    const  user = userService.findById(payload.id).then(function(user) {
      if(payload.expire <= Date.now()) {
        return done(null, false, {
          message: "Token expired"
        });
      } else{
        return done(null, user);
      }
    });
  });
  passport.use("jwt",strategy);
  return {
    initialize: function() {
      return passport.initialize(cfg.jwtSession);
    },
    authenticate: function() {
      return passport.authenticate('jwt', cfg.jwtSession);
    }
  };
};