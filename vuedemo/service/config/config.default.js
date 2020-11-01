/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600137019681_9244';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // // 配置服务器基本信息
  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 7001,
  //     hostname: '127.0.0.1', //默认localhost和ip地址,上线时用0.0.0.0
  //   }
  // };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'cake',
    }
  };
  // 跨域的配置
  //credentials: true,//跨域服务的页面去做cookie缓存
  config.cors = {
    origin: 'http://127.0.0.1:7001',
	//origin: 'http://106.75.129.14:7001',
    credentials: true, //后端会去前端返回储存数据包，告诉浏览器去做缓存
  };
  // 配置安全验证 post请求
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    }
  };

  exports.session = {
    key: 'HQYJ', //唯一标识
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };
  //config 文件中启用 file 模式
  exports.multipart = {
    mode: 'file',
  };

  return {
    ...config,
    ...userConfig,
  };
};