if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9000;
const mainRouter = require('./main');
const addRouter = require('./add');
const displayRouter = require('./display');
const deleteRouter = require('./delete');
const updateRouter = require('./update');
const authRouter = require('./auth');
const passportLocal = require("passport-local").Strategy;
// const cookieParser = require("cookie-parser");
const flash = require('express-flash');
const session = require('express-session');
const cors = require("cors");
const passport = require("passport");
app.use(bodyParser.json());
app.use(flash());

app.use(session({
  secret:"secret", 
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())
// app.use(cookieParser("secret"));
app.use(cors());
app.use('/main', mainRouter);
app.use('/add', addRouter);
app.use('/sendTable', displayRouter)
app.use('/delete', deleteRouter)
app.use('/update', updateRouter)
app.use('/auth', authRouter)





app.get('/', function(req, res, next) {
  res.send("Menu:");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

