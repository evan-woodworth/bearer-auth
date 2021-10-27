const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//database
const { db, users } = require('../src/auth/models/index.js');

const STRATEGY = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, cb) => {
    try {
        const user = await users.authenticateBasic(username, password);
        cb(null, user);
    } catch (err) {
        console.error(err);
        cb(null, false);
    }
});

passport.serializeUser((user, cb)=>{
    cb(null, user.id);
})

passport.deserializeUser(async (id, cb)=>{
    try {
        const user = await db.users.findByPk(id);
        if (user) {
            cb(null, user);
        }
    } catch (err) {
        console.log('------- Error below -----------');
        console.error(err);
    }
});

passport.use(STRATEGY);
module.exports = passport;