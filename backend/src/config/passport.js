const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.SECRET_KEY,
    passReqToCallback: true,
};

exports.jwtLogin = new JwtStrategy(jwtOptions, (req, payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if (err) { return done(err, false);}

        if ( user ) {
            req.user = user;
            done(null, user);
        } else {
            done(null, false);
        }
     });
});
