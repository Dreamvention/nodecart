module.exports = {
	init : function(app) {
		fs.readdirSync(global.dir.app+'controller').forEach(function (folder) {

			if(fs.lstatSync(global.dir.app+'controller/'+folder).isDirectory()){

				fs.readdirSync(global.dir.app+'controller/'+folder).forEach(function (file) {

					if(file.substr(-3) == '.js') {

						controller = require(global.dir.app + 'controller/' + folder + '/' + file);
						controller.controller(app);

					}
				});
			}
		});
	}
}