/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : btb

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-06-08 15:21:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment` text COLLATE utf8_unicode_ci,
  `mtime` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '123123', '123123123', '8,Jun 2021');
INSERT INTO `comment` VALUES ('2', '123123', '123123123', '8,Jun 2021');
INSERT INTO `comment` VALUES ('3', '123123', '耶耶耶耶', '8,Jun 2021');
INSERT INTO `comment` VALUES ('4', '123123', '234234', '8,Jun 2021');
INSERT INTO `comment` VALUES ('5', '123123', 'fffsdf', '8,Jun 2021');
INSERT INTO `comment` VALUES ('6', '123123', 'ddd', '8,Jun 2021');

-- ----------------------------
-- Table structure for mylike
-- ----------------------------
DROP TABLE IF EXISTS `mylike`;
CREATE TABLE `mylike` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `btc` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `eth` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `ltc` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of mylike
-- ----------------------------
INSERT INTO `mylike` VALUES ('1', '123123', '1', '0', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', '123123', '4297f44b13955235245b2497399d7a93', '111@qq.com', '123123');
