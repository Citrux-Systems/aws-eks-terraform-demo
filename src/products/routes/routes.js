const ProductsController = require('../controllers/products_controller');

const routes = app => {
  // @route    GET api
  // @desc     Get products
  // @access   Public
  app.get('/v1/products', ProductsController.get);
  // @route    GET api
  // @desc     Get product
  // @access   Public
  app.get('/v1/products/:id', ProductsController.getById);
};

module.exports = routes;