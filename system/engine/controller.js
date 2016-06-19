exports.init = function(app)
{
	fs.readdirSync(config.get('dir').app+'controller').forEach(function (folder) {

		if(fs.lstatSync(config.get('dir').app+'controller/'+folder).isDirectory()){

			fs.readdirSync(config.get('dir').app+'controller/'+folder).forEach(function (file) {

				if(file.substr(-3) == '.js') {

					controller = require(config.get('dir').app + 'controller/' + folder + '/' + file);
					controller.controller(app);

				}

			});

		}

	});
	
}