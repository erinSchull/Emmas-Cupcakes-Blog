require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , cors = require('cors')
    , stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


    
const ctrl = require('./controllers/users_controller');
const blogCtrl = require('./controllers/blogs_controller');
const orderCtrl = require('./controllers/orders_controller');
    
const app = express();
    
app.use(cors())
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
    console.log(profile);
    // db calls

    const db = app.get('db');
    db.find_user([ profile.identities[0].user_id ]).then( user => {
        console.log(1, user)
        if(user[0]) {
            console.log('text')
           return done(null, user[0].userid)
        } else {
            const user = profile._json
            db.create_user([ user.given_name,
                user.family_name,
                user.email,
                user.identities[0].user_id])
            .then(user => {
                console.log('testing')
                done(null, user[0].userid)
            })
        }
    })
    // done(null, id);

}))

app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function(err, charge) {
      if (err) return res.sendStatus(500)
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });

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

//auth endpoints
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/')
})


passport.serializeUser(function (id, done) {
    done(null, id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').current_user([ id ])
    .then( user => {
        done(null, user[0])
    })
    // done(null, id);
})

//db blog endpoints
// app.get('/api/:blogid', blogCtrl.getOne);
// app.put('/api/:blogid', blogCtrl.create);
//not using these anymore

//db order endpoints
app.get('/api/order/:id', orderCtrl.getOrder);
app.post('/api/order/:id', orderCtrl.addOrder);
app.post('/api/order/:id', orderCtrl.addTotal);
app.delete('/api/order/:id', orderCtrl.deleteOrder);
app.put('/api/order/:id', orderCtrl.updateStatus);

//db user endpoints
app.get('/api/admin', ctrl.getAdmin);
app.get('/api/user', ctrl.getUser);
app.get('/api/orders/:userid', ctrl.getOrdersOnUser);


const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));