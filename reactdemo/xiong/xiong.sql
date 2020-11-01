-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.1.73-community - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.5.0.5220
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 xiongxiong 的数据库结构
CREATE DATABASE IF NOT EXISTS `xiongxiong` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `xiongxiong`;

-- 导出  表 xiongxiong.address 结构
CREATE TABLE IF NOT EXISTS `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '地址簿id',
  `uid` int(10) DEFAULT NULL COMMENT '收藏地址人id',
  `name` char(50) DEFAULT NULL COMMENT '姓名',
  `phone` int(11) DEFAULT NULL COMMENT '手机号',
  `address` char(50) DEFAULT NULL COMMENT '地址',
  `menpaihao` char(50) DEFAULT NULL COMMENT '门牌号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='个人地址簿';

-- 正在导出表  xiongxiong.address 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` (`id`, `uid`, `name`, `phone`, `address`, `menpaihao`) VALUES
	(1, 1, '小明', 1, '111', '111');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- 导出  表 xiongxiong.myorder 结构
CREATE TABLE IF NOT EXISTS `myorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单id号',
  `quality` char(50) DEFAULT NULL COMMENT '货物重量',
  `state` varchar(100) DEFAULT '0' COMMENT '订单99所有,0待支付,1配送中，2代收,3已完成，4已取消',
  `uid` varchar(50) DEFAULT NULL COMMENT '发货人id',
  `qianshou` varchar(50) DEFAULT NULL COMMENT '是否当面签收',
  `price` char(50) DEFAULT NULL COMMENT '订单价格',
  `time` varchar(50) DEFAULT NULL COMMENT '下单时间',
  `info` varchar(100) DEFAULT NULL COMMENT '订单描述',
  `sid` varchar(50) DEFAULT NULL COMMENT '收货人id',
  `address1` varchar(500) DEFAULT NULL COMMENT '发货地址',
  `address2` varchar(500) DEFAULT NULL COMMENT '收获地址',
  `phone1` varchar(500) DEFAULT NULL COMMENT '发货人电话',
  `phone2` varchar(500) DEFAULT NULL COMMENT '收货人电话',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 COMMENT='订单';

-- 正在导出表  xiongxiong.myorder 的数据：~23 rows (大约)
/*!40000 ALTER TABLE `myorder` DISABLE KEYS */;
INSERT INTO `myorder` (`id`, `quality`, `state`, `uid`, `qianshou`, `price`, `time`, `info`, `sid`, `address1`, `address2`, `phone1`, `phone2`) VALUES
	(45, '4', '1', '1', 'true', '208.0', '2020-10-15 09:59:24', '大风刮过分公司', '0', NULL, NULL, NULL, NULL),
	(46, '4', '1', '1', 'true', '208.0', '2020-10-15 09:59:24', '大风刮过分公司', '2', NULL, NULL, NULL, NULL),
	(47, '2', '2', '0', 'true', '104.0', '2020-10-17 10:42:22', '大厦撒大声地', '0', 'fgsg', 's', NULL, NULL),
	(49, '2', '3', '1', 'true', '104.0', '2020-10-23 13:33:32', '送快点', '1', '成都', '凯里', '19212418573', '18212418777'),
	(50, '3', '2', '1', 'true', '156.0', '2020-10-23 13:33:32', '送快点4245254', '1', '成都', '凯里', '19212418573', '18212418744'),
	(51, '3', '3', '1', 'true', '156.0', '2020-10-23 13:33:32', '7542432542', '1', '成都', '凯里', '19212418573', '18212418744'),
	(52, '3', '4', '2', 'true', '156.0', '2020-10-23 13:33:32', '7542432542', '1', '成都', '9654654', '19212418573', '18212418744'),
	(53, '3', '3', '1', 'true', '156.0', '2020-10-23 13:33:32', '7542432542', '1', '成都', '9654654', '13212418573', '18212418744'),
	(54, '4', '2', '0', 'true', '208.0', '2020-10-23 13:33:32', '7542432542', '2', '成都', '9654654', '13212418573', '18212418744'),
	(55, '5', '1', '1', 'true', '260.0', '2020-10-23 13:33:32', '7542432542', '1', '成都', '9654654', '13212418573', '18212418744'),
	(56, '5', '4', '0', 'true', '260.0', '2020-10-23 13:33:32', '7542432542', '1', '成都', '9654654', '13212418573', '18212418744'),
	(57, '5', '2', '1', 'true', '260.0', '2020-10-23 13:33:32', '7542432542', '0', '成都', '9654654', '13212418573', '18212418744'),
	(58, '5', '1', '1', 'true', '260.0', '2020-10-29 13:33:32', '7542432542', '1', '成都', '阿萨德', '13212418573', '18212418744'),
	(59, '2', '0', '2', 'true', '104.0', '2020-10-24 13:40:20', '我李固不开机回放', '1', '绵阳', '贵阳', '18212418511', '15512418575'),
	(60, '3', '0', '0', 'true', '156.0', '2020-10-24 13:40:20', '5422', '1', '绵阳', '贵阳', '18212418511', '15512418575'),
	(61, '2', '0', '2', 'true', '104.0', '2020-10-24 13:40:20', '32453134', '1', '六盘水', '花溪', '18212418512', '15512418111'),
	(62, '2', '0', 'undefined', 'true', '104.0', '2020-10-19 06:00:00', '方法', '575', 'fglosjnflksd', '是的撒的', '18212418571', '18212418577'),
	(63, '2', '0', 'undefined', 'true', '104.0', '2020-10-19 06:00:00', '999', '9999', 'fglosjnflksd', '是的撒的', '18212418571', '18212418577'),
	(64, '3', '0', '小康', 'true', '156.0', '2020-10-31 14:37:48', '刊', '刘敏', '四川', '贵阳', '18212418570', '18212418577'),
	(65, '2', '0', 'asdsa', 'true', '104.0', '2020-10-30 14:45:40', 'd ', 'aasdasfasf', 'fgsg', 's', '18212418574', '18212418574'),
	(66, '2', '0', ' r', 'true', '104.0', '2020-10-16 14:51:04', 'rr', 'rr', 'r ', 'rr', '18212418574', '18212418574'),
	(67, '2', '0', 're  ', 'true', '10499.0', '2020-10-19T06:52:14.689Z', 'rewr', 'aasdasfasf', 'rer', 'r r', '18212418574', '18212418574'),
	(68, '3', '0', 's', 'true', '156.0', '2020-10-31 22:03:10', 'egr99999999999999999999ryhergdfbgfd', 'aasdasfasf', 'fgsg', 's', '18212418574', '18212418574');
/*!40000 ALTER TABLE `myorder` ENABLE KEYS */;

-- 导出  表 xiongxiong.uer 结构
CREATE TABLE IF NOT EXISTS `uer` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id，用来查订单',
  `name` char(50) NOT NULL COMMENT '用户名',
  `phone` int(11) NOT NULL COMMENT '用户手机号',
  `money` int(8) NOT NULL COMMENT '用户余额',
  `pwd` varchar(50) NOT NULL COMMENT '用户登录密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  xiongxiong.uer 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `uer` DISABLE KEYS */;
INSERT INTO `uer` (`id`, `name`, `phone`, `money`, `pwd`) VALUES
	(1, '小明', 1, 999, '1');
/*!40000 ALTER TABLE `uer` ENABLE KEYS */;

-- 导出  表 xiongxiong.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` char(50) DEFAULT NULL,
  `password` char(50) DEFAULT NULL,
  `nickname` char(50) DEFAULT NULL,
  `phone` char(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  xiongxiong.user 的数据：~19 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `email`, `password`, `nickname`, `phone`) VALUES
	(1, '1777777', '1', 'we', '1546277356'),
	(2, '111111', '1234', '1234', '165475'),
	(3, '111111', '1234', '1234', '165475'),
	(4, '111111', '1234', '1234', '165475'),
	(5, '111111', '1234', '1234', '165475'),
	(6, '111111', '1234', '1234', '165475'),
	(7, '1774054750@qq.com', '2', '㔿，', '18386718478'),
	(8, '1774054750@qq.com', '2', '㔿，', '18386718478'),
	(9, '1774054750@qq.com', '2', '㔿，', '18386718478'),
	(10, '2774054750@qq.com', '1', '㔿，', '18386718478'),
	(11, '3774054750@qq.com', '1', '㔿，', '18386718478'),
	(12, '5774054750@qq.com', '1', '㔿，', '18386718478'),
	(13, 'undefined', '1', 'undefined', 'undefined'),
	(14, '121111', '2343', 'er', '165475'),
	(15, '1774754750@qq.com', '1', '调用', '18386718478'),
	(16, '1773@qq.com', '1', 'rt', '18386718478'),
	(17, '177400@qq.com', '1', 'e', '18386718478'),
	(18, '1255274497@qq.com', '1', '1', '12100000000141'),
	(19, '2255274497@qq.com', '11', '11', '12100000000141');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
