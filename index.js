var express = require('express');
var app = express();
var hbs = require('express-handlebars');
var session = require('express-session');
var fs = require('fs');
var path = require('path');
var async = require('async');
var Entities = require('html-entities').AllHtmlEntities;


app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'somesecrettokenhere',resave: true,saveUninitialized: true}));
//config
global.hbs = hbs;
global.entities = new Entities();;
global.async = async;
global.db_name = 'store';
global.db_host = 'mongodb://localhost:27017/';
global.dir_model = __dirname+'/app/model/';
global.dir_view = __dirname+'/app/view/';
global.limit_products = 8;
app.all('/index.js*', function(req, res, next) {

  if(req.query.r != undefined) {
    var routes =  req.query.r.split('/');
  }
  else {
    var routes =  ['common','home','index'];
  }

  if(routes.length==3)
  {
    var route =routes[0];
    var name = routes[1];
    var action = routes[2];
  }
  if(routes.length==2)
  {
    var route = routes[0];
    var name = routes[1];
    var action = 'index';
  }

  if(path!=undefined && name!=undefined && action!=undefined)
  {
    fs.stat(__dirname+'/app/controller/'+route+'/'+name+'.js',function(err,stat){
      if(err == null){

        var obj = require(__dirname+'/app/controller/'+route+'/'+name+'.js');

        if(obj[action]!=undefined)
        {
          //Handlebars
          app.engine('.hbs', hbs({extname:'.hbs', defaultLayout:'main', partialsDir: path.resolve(__dirname, 'app/view/partials'),layoutsDir: path.resolve(__dirname, 'app/view/layout')}));
          app.set('view engine', 'hbs');
          app.set('views',dir_view+route);
          obj[action](req,res,next);
        }
        else {
            res.redirect('/index.js?r=error/not_found');
        }
      }
      else {
          res.redirect('/index.js?r=error/not_found');
      }
    });
  }
});
app.all('/', function(req, res, next){
  res.redirect('index.js');
});
app.listen(3000,function(){
  console.log('Your Store strating!')
});
