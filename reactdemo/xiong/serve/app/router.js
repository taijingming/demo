'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/addorder', controller.home.addorder);
  router.get('/getorder', controller.home.getorder);
  router.get('/getsearch', controller.home.getsearch);
  router.post('/register', controller.home.register)
  router.get('/verif', controller.home.verif)
  router.post('/login', controller.home.login);
  router.post('/forgetpwd', controller.home.forgetpwd)
};
