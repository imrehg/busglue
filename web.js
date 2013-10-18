var express = require('express')
  , util = require('util')
  , ejs = require('ejs')
  , engine = require('ejs-locals')
  , mysql = require('mysql')
  ;

var app = express();

app.engine('ejs', engine);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.locals({
  _layoutFile: false
});

app.use(express.logger());
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: process.env.SESSION_SECRET || 'akjsfkjs345$%VFDVGT%'}));
app.use(express.errorHandler());

// Ensure HTTPS: http://elias.kg/post/14971446990/force-ssl-with-express-js-on-heroku-nginx
app.use(function(req, res, next) {
    var schema = req.headers["x-forwarded-proto"];

    if (!schema || schema === "https") {
        return next();
    }
    // --- Redirect to https
    res.redirect("https://" + req.headers.host + req.url);
});

// Print the index page
app.get("/", function (req, res) {
    res.render('index');
});


// //The 404 Route (ALWAYS Keep this as the last route)
// app.get('/*', function(req, res){
//     throw new NotFound;
// });

// function NotFound(msg){
//     this.name = 'NotFound';
//     Error.call(this, msg);
//     Error.captureStackTrace(this, arguments.callee);
// }

// app.use(function(err, req, res, next){
//     if (err instanceof NotFound) {
//         res.render('404.ejs', { title: "Not found | Friendcare",
// 				req: req,
// 				status: 404 });
//     } else {
// 	throw err;
//     }
// });

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
