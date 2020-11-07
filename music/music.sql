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


-- 导出 music 的数据库结构
CREATE DATABASE IF NOT EXISTS `music` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `music`;

-- 导出  表 music.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `oldpassword` varchar(50) DEFAULT NULL,
  `registerTime` varchar(50) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  music.user 的数据：~9 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `password`, `oldpassword`, `registerTime`, `sex`) VALUES
	(1, '1', '1', NULL, NULL, NULL),
	(2, '2', '2', NULL, NULL, NULL),
	(3, '3', '3', NULL, NULL, NULL),
	(4, '4', '4', NULL, NULL, NULL),
	(5, '5', '5', NULL, NULL, NULL),
	(6, '6', '6', NULL, NULL, NULL),
	(7, '7', '7', NULL, NULL, NULL),
	(8, '8', '8', NULL, NULL, NULL),
	(9, 'a', 'a', NULL, '2020-10-31', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
