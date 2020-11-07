'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/homedata', controller.home.getData);
  router.get('/search', controller.home.search);
  router.get('/searchSong', controller.home.searchSong);
  router.post('/register', controller.user.register);
  router.post('/login', controller.user.login);
  router.get('/verif', controller.user.verif);
};
