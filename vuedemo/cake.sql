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


-- 导出 cake 的数据库结构
CREATE DATABASE IF NOT EXISTS `cake` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cake`;

-- 导出  表 cake.car 结构
CREATE TABLE IF NOT EXISTS `car` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `Uid` int(11) DEFAULT NULL,
  `Gid` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8 COMMENT='购物车表';

-- 正在导出表  cake.car 的数据：~5 rows (大约)
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` (`cid`, `Uid`, `Gid`) VALUES
	(91, 5, 11),
	(92, 5, 9),
	(96, 6, 3),
	(104, 7, 14),
	(105, 7, 1);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- 导出  表 cake.classify 结构
CREATE TABLE IF NOT EXISTS `classify` (
  `Cid` int(11) NOT NULL AUTO_INCREMENT,
  `Cname` char(50) DEFAULT NULL,
  PRIMARY KEY (`Cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='分类';

-- 正在导出表  cake.classify 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `classify` DISABLE KEYS */;
/*!40000 ALTER TABLE `classify` ENABLE KEYS */;

-- 导出  表 cake.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `Gid` int(11) NOT NULL AUTO_INCREMENT,
  `Cid` int(11) DEFAULT NULL COMMENT '分类id',
  `Tid` int(11) DEFAULT NULL,
  `Gname` varchar(50) DEFAULT NULL COMMENT '商品名',
  `img` varchar(500) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL COMMENT '商品描述',
  `price` int(11) DEFAULT NULL COMMENT '价格',
  `quality` char(50) DEFAULT NULL COMMENT '质量',
  `party` char(50) DEFAULT NULL COMMENT '适用场合',
  `liqueur` char(50) DEFAULT NULL COMMENT '含酒',
  `per_person` char(50) DEFAULT NULL COMMENT '一人份',
  `cp` char(50) DEFAULT NULL COMMENT '情侣',
  `popularity` char(50) DEFAULT NULL COMMENT '人气',
  `new_product` char(50) DEFAULT NULL,
  `designer` char(50) DEFAULT NULL,
  `birthday` char(50) DEFAULT NULL,
  `child` char(50) DEFAULT NULL,
  `elder` char(50) DEFAULT NULL,
  `time` time DEFAULT '09:30:00',
  PRIMARY KEY (`Gid`),
  KEY `Cid` (`Cid`),
  KEY `Tid` (`Tid`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='商品表';

-- 正在导出表  cake.goods 的数据：~37 rows (大约)
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` (`Gid`, `Cid`, `Tid`, `Gname`, `img`, `description`, `price`, `quality`, `party`, `liqueur`, `per_person`, `cp`, `popularity`, `new_product`, `designer`, `birthday`, `child`, `elder`, `time`) VALUES
	(1, 1, 1, '蔓生', 'https://static.21cake.com//upload/images/8e5930873714d422476417759b01e4b8.png', '树莓奶油与浆果慕斯蛋糕', 198, '454', NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, '09:30:00'),
	(2, 1, 1, '深爱', 'https://static.21cake.com//upload/images/2bd6022d079dafb61d084658bded8e77.png', '你深爱过么', 398, '908', NULL, '1', NULL, '1', '1', NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(3, 1, 1, '榴莲飘飘', 'https://static.21cake.com//upload/images/236e37ff4694ae6d5c94afddddbaad91.png', '丰厚乳脂奶油，打入足量榴莲果肉', 198, '454', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(4, 1, 4, ' 黑白巧克力慕斯 彼尔德（HBD）', 'https://static.21cake.com//upload/images/85c3ec51f9ac1c0a2b7a9a4cceafc61d.png', '卡通定制撒粉，简单、柔软', 199, '454', NULL, NULL, NULL, NULL, NULL, '1', '1', NULL, NULL, NULL, '09:30:00'),
	(5, 1, 3, '枣儿', 'https://static.21cake.com//upload/images/523259029cb1ff789d9b0beacf51b315.png', '红枣奶油戚风，与姜撞奶慕斯', 198, '454', NULL, NULL, NULL, NULL, NULL, '1', NULL, '1', NULL, NULL, '09:30:00'),
	(6, 1, 4, '黑白巧克力慕斯 彼尔德（Party）', 'https://static.21cake.com//upload/images/89803ef2e60bade042e32a0e599321c4.png', '“ 孩子的世界，简单到非黑即白。”', 66, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(7, 1, 1, '米道', 'https://static.21cake.com//upload/images/404f4d71290c67e519e52cd9a93c8d44.png', '一款专为孩子设计的蛋糕', 298, '454', NULL, NULL, NULL, NULL, '1', NULL, NULL, '1', '1', NULL, '09:30:00'),
	(8, 1, 1, '芒果奶油蛋糕', 'https://static.21cake.com//upload/images/6bc820b91c8438eafcad8b0a0936ee73.png', '21cake配方芒果百香果慕斯夹心', 198, '908', '1', NULL, NULL, '1', '1', NULL, NULL, NULL, '1', NULL, '09:30:00'),
	(9, 1, 2, '百香果酸乳酪慕斯（木糖醇）', 'https://static.21cake.com//upload/images/dfe6f2c320b07c64fbff7c43973ffe38.png', '冰淇淋口感，不同层次的酸与冰凉', 198, '454', NULL, NULL, NULL, '1', NULL, '1', NULL, NULL, '1', NULL, '09:30:00'),
	(10, 1, 2, '黑白巧克力慕斯', 'https://static.21cake.com//upload/images/f06e749d64c650827a7121dd0dad4355.png', '白巧克力慕斯的甜，与黑巧克力酱的苦', 298, '908', '1', '1', NULL, NULL, '1', NULL, NULL, '1', NULL, NULL, '09:30:00'),
	(11, 1, 1, 'Tofu cheese Cake', 'https://static.21cake.com//upload/images/f608ab69fc31d857d3b04f68cad6f323.jpeg', '米道孪生儿童蛋糕', 298, '454', NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '1', NULL, '09:30:00'),
	(12, 1, 1, '朗姆芝士', 'https://static.21cake.com//upload/images/675e4320415f48a73bfaf446c8c3cb3c.png', '清香柠檬与乳酪夹心，微苦、微醺', 298, '908', NULL, '1', NULL, '1', NULL, NULL, NULL, '1', NULL, NULL, '09:30:00'),
	(13, 1, 2, '冻慕斯与焗芝士', 'https://static.21cake.com//upload/images/f3b57b18e54f65a5c015a196d2e993cf.png', '马斯卡彭慕斯，叠加法国软芝士', 198, '454', NULL, NULL, NULL, '1', NULL, NULL, NULL, '1', NULL, NULL, '09:30:00'),
	(14, 1, 3, '「新」杰瑞', 'https:////static.21cake.com//upload/images/c08f540d4088cd0b6e65da8302f6afdd.png', '芝士与坚果的完美融合', 198, '454', '1', NULL, NULL, NULL, NULL, '1', NULL, NULL, '1', NULL, '09:30:00'),
	(15, 1, 1, '松仁淡奶（木糖醇）', 'https://static.21cake.com//upload/images/2d86295cc4f0b803fad9a07156887f7d.png', '轻松吃的木糖醇松子蛋糕', 98, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, '09:30:00'),
	(16, 1, 4, '摩卡', 'https://static.21cake.com//upload/images/505c71f60ac4b3d96744a6bb54d63cb1.jpg', NULL, 398, '908', NULL, NULL, '1', NULL, NULL, '1', NULL, NULL, NULL, NULL, '09:30:00'),
	(17, 1, 4, '布莱克', 'https://static.21cake.com//upload/images/876769ac33295fb48da37430f85067f5.jpg', NULL, 198, '454', NULL, NULL, '1', NULL, '1', NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(18, 1, 3, 'Jerry （新）杰瑞', 'https://static.21cake.com//upload/images/0a4ec452eadba714c57ca808a9c80c17.png', NULL, 198, '454', '1', NULL, NULL, NULL, NULL, '1', NULL, NULL, '1', NULL, '09:30:00'),
	(19, 1, 2, '6口味切块（清凉版）', 'https://static.21cake.com//upload/images/d8887b461c5080fc25ccc2b5819af0fc.jpg', NULL, 198, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(20, 1, 5, '核桃斯诺', 'https://static.21cake.com//upload/images/822bf8a56403f84dd70e1bfa16d9ed02.jpg', NULL, 198, '454', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, '09:30:00'),
	(21, 2, NULL, '柚子冰淇淋', 'https://static.21cake.com//upload/images/4f206035ab1f8d8a4c55a4e335769e82.jpg', NULL, 45, '一盒', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(22, 2, NULL, '原味牛乳冰淇淋', 'https://static.21cake.com//upload/images/4d839ee123f383d1fd13c47967412bf7.jpg', NULL, 45, '一盒', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(23, 2, NULL, '榴莲冰淇淋', 'https://static.21cake.com//upload/images/e5bef17b22763a8fdd632916cf268843.jpg', NULL, 45, '一盒', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(24, 2, NULL, '夏日-Affogato组合', 'https://static.21cake.com//upload/images/c227866897b665ad84d40e0ed4ea1591.jpg', NULL, 55, '一份', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(25, 3, NULL, '苏门答腊咖啡盒装（10包入）', 'https://static.21cake.com//upload/images/41c23da49cbc0b5bccc47e46d8c2af49.jpg', NULL, 100, '一盒', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(26, 3, NULL, '小切块-芒果奶油蛋糕', 'https://static.21cake.com//upload/images/0538a3d40299e26817645fdb26105091.jpg', NULL, 36, '65', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(27, 3, NULL, '小切块-黑白巧克力慕斯', 'https://static.21cake.com//upload/images/d0f6a2490518946ba1027fb1b72ac05f.jpg', NULL, 36, '85', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(28, 3, NULL, '小切块-松仁淡奶', 'https://static.21cake.com//upload/images/ac53847994d7a824e9b7cf00186bebc2.jpg', NULL, 36, '65', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(29, 4, NULL, '磅蛋糕切片（核桃）', 'https://static.21cake.com//upload/images/16402f5f4f006231871d81dc71f35b05.jpg', NULL, 8, '30', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(30, 4, NULL, '磅蛋糕切片（杏仁）', 'https://static.21cake.com//upload/images/be1df159b4d226180e99ce09194b7a41.jpg', NULL, 8, '30', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(31, 4, NULL, '磅蛋糕切片（黑朗姆）', 'https://static.21cake.com//upload/images/4430cb04cdaf6de8e4e23323475b871b.jpg', NULL, 8, '28', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(32, 5, NULL, '方形蜡烛', 'https://static.21cake.com//upload/images/9f3230040330f4e665fa045cdb60defa.jpg', NULL, 8, '个', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(33, 5, NULL, '圣诞绿蜡烛', 'https://static.21cake.com//upload/images/676d157fcdbfb8dfdf006745d1849bc5.jpg', NULL, 12, '个', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(34, 5, NULL, '设计师竹纸扇', 'https://static.21cake.com//upload/images/0ca8d77861d02e3bad9f2a421f4d1eb5.jpg', NULL, 38, '把', NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, '09:30:00'),
	(35, 5, NULL, '拷贝蜡烛-抹茶和栗', 'https://static.21cake.com//upload/images/1a2bb9decfcadfc87cd00c9bb1843546.jpg', NULL, 18, '个', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(36, 5, NULL, '设计师八音盒', 'https://static.21cake.com//upload/images/7d563b833ef5763d5253be6af46b379f.jpg', NULL, 80, '个', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '09:30:00'),
	(37, 1, 1, '浅草', 'https://static.21cake.com//upload/images/59954fac59f25d03564b474b1a10e385.jpg', NULL, 198, '454', NULL, NULL, NULL, NULL, '1', '1', NULL, '1', NULL, NULL, '09:30:00');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

-- 导出  表 cake.leave_message 结构
CREATE TABLE IF NOT EXISTS `leave_message` (
  `Mid` int(11) NOT NULL AUTO_INCREMENT,
  `Uid` int(11) DEFAULT NULL,
  `city` char(50) DEFAULT NULL,
  `CompanyName` char(50) DEFAULT NULL,
  `ContactPerson` char(50) DEFAULT NULL,
  `PhoneNumber` char(50) DEFAULT NULL,
  `email` char(50) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`Mid`),
  KEY `Uid` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='留言';

-- 正在导出表  cake.leave_message 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `leave_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `leave_message` ENABLE KEYS */;

-- 导出  表 cake.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `Uid` int(11) NOT NULL AUTO_INCREMENT,
  `phone` char(11) DEFAULT NULL,
  `pwd` char(20) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `sex` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `name` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  cake.user 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`Uid`, `phone`, `pwd`, `birth`, `img`, `sex`, `email`, `name`) VALUES
	(5, '18212418574', 'aaaa11', '2020-09-25', 'http://127.0.0.1:7001/public/upload/5dac5fe0-3a54-4f79-a0c4-5f3a83743737.jpg', NULL, NULL, NULL),
	(6, '18212418111', 'a12345', '2020-09-11', 'http://127.0.0.1:7001/public/upload/b4ca180b-1bcc-42a9-adb0-1f86a15ef6ba.jpg', NULL, NULL, NULL),
	(7, '19912418574', 'a123456', '2020-10-12', 'http://127.0.0.1:7001/public/upload/9576b92d-233f-4765-9f8c-0d0eb4d5a38f.jpg', '男', '1255274497@qq.com', 'tjm');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
