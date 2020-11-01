'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.post('/register', controller.user.register);
  // router.get('/verif', controller.user.verif);//验证码
  // router.post('/login', controller.user.login);
  // router.get('/userinfo', controller.user.userinfo);
  router.get('/car', controller.car.car);//购物车
  router.get('/qingkongCar', controller.car.qingkongCar);//清空购物车
  router.get('/deleteCar', controller.car.deleteCar);//删除单个商品
  router.get('/addGoods', controller.car.addGoods);
  router.get('/home', controller.home.home);
  router.post('/register', controller.user.register);
  router.post('/login', controller.user.login);
  router.get('/verif', controller.user.verif);
  router.post('/resetpwd', controller.user.resetpwd);
  router.post('/reset2', controller.user.reset2);
  router.get('/userinfo', controller.user.userinfo);
  router.post('/editinfo', controller.user.editinfo);
  router.get('/*', controller.home.all);

};
