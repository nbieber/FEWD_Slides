var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var content = require('./routes/content');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

var session = require('express-session');
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
var verifyUser = function(req, res, next) {
    if(req.session.loggedIn) {
        next(); 
    } else {
        var username = "admin", password = "admin";
        if(req.body.username === username && 
        req.body.password === password) {
            req.session.loggedIn = true;
            res.redirect('/');
        } else {
            res.render("login", {title: "Please log in."});
        }

    }   
}
app.all('/', verifyUser, routes);
app.all('/content', verifyUser, content);

var logout = function(req, res, next) {
    req.session.loggedIn = false;
    res.redirect('/');
}
app.all('/logout', logout);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
