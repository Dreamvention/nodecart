var bookshelf = require('../base');

var Product = bookshelf.Model.extend({
  tableName: 'oc_product'
});

function * getProducts(){
	var result = [];

	yield Product.fetchAll()
		.then(function (products) {
			 result = products.toJSON();
		}).catch(function(err) {
			console.error(err);
		});

	return result;
}

function * getProduct(product_id){
	var result = [];
	
	yield Product.where('product_id', product_id).fetch()
		.then(function (product) {
			 result = product.toJSON();
		}).catch(function(err) {
			console.error(err);
		});

	return result;
}

module.exports = {
	getProducts: getProducts,
	getProduct: getProduct

}
