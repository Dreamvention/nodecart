var global = require('../../../config');
module.exports.controller = function(app) {

app.route('/catalog/product')

	.get(function * (next) {
		
  		var Product = require(global.dir.app + 'model/catalog/product');
  		
  		var products = yield Product.getProducts();
  		
		this.body = products;
		yield next;
		
	});

app.route('/catalog/product/:product_id')

  .get(function * (next) {
      	var Product = require(global.dir.app + 'model/catalog/product');
  		
  		var products = yield Product.getProduct(this.params.product_id);

		this.body = products;
		
		yield next;
  });

}