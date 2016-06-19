module.exports.controller = function(app) {

/**
 * a home page route
 */

 
 
  app.get('/product/products', function(req, res) {
      res.send('Audi, BMW, Mercedes')
  });

  app.get('/product/products/:product_id', function(req, res) {

      res.send('Audi, BMW, Mercedes for product_id = '+req.params.product_id)
  });


}