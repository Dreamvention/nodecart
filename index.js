version = '0.0.0';
var	express = require('express');

	fs = require('fs');

	//config
	config = require('nconf');
	config.add("config", {type: 'file', file:'config.json'});

	app = express();

	//router
	router = express.Router();
	app.use(router);
	controller = require(config.get('dir').system+'engine/controller');
	controller.init(app);

app.listen(3000,function(){
  console.log('Your Store strating!');
});
