version = '0.0.0';

var global = require('./config');
var json = require('koa-json');
var	koa = require('koa');
var routing = require('koa-routing');


	//app
	app = koa();
	app.use(json());
	//database

	//router
	app.use(routing(app));
	controller = require(global.dir.system+'engine/controller');
	controller.init(app);

app.listen(global.port,function(){
  console.log('Nodecart is now selling at port:'+global.port);
});