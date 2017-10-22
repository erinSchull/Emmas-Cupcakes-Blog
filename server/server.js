require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

const ctrl = require('./controller.js');

const app = express();

app.use(bodyParser.json());
app.use(session({ //always config first
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

setTimeout(_ => {
    const db = app.get('db')
    console.log('the db should be accessible');
}, 2000)

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // db calls
    const id = 'id';
    const db = app.get('db');
    db.find_user([ profile.identities[0].user_id ]).then( user => {
        console.log(user)
        if(user[0]) {
           return done(null, user[0].userid)
        } else {
            const user = profile._json
            console.log(user)
            db.create_user([ user.given_name,
                user.family_name,
                user.email,
                user.identities[0].user_id])
            .then(user => {
                done(null, user[0].userid)
            })
        }
    })
    // done(null, id);

}))

app.get('/auth', passport.authenticate('auth0')); //just how this library was written
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/', //where we're running our front end
    failureRedirect: '/auth'
}))
app.get('/auth/me', (req, res) => {
    if (!req.user) { //if there is no user
        return res.status(404).send('User Not Found.')
    }
    return res.status(200).send(req.user);
})

//endpoints
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/')
})

// app.get('/api/admin', ctrl.getAdmin)

passport.serializeUser(function (id, done) {
    done(null, id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_current_user([ id ])
    .then( user => {
        done(null, user[0])
    })
    // done(null, id);
})



const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));