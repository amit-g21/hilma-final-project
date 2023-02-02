-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: store_Data
-- ------------------------------------------------------
-- Server version	8.0.32-0buntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `collection_id` int DEFAULT NULL,
  `product_name` varchar(40) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `product_description` text,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `collection_id` (`collection_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`collection_id`) REFERENCES `collection` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,'jorden 1',60,'this jorden 1 was mase by michel jorden in 1998','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymYGyunWAlAdLADVLEl-0ZsBwJ7VY_ZQyYla-UKt4JQ7Xx3e7lLUTxJtoVP2GAK3WsC0&usqp=CAU'),(3,1,'jorden two',50,'this amit one was mase by shaq in 2003','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3uGGuLkCJLugNLd0nLCzrGr1YhnUJwzuyA&usqp=CAU'),(14,1,'Nike LeBron 17',120,'Low-cut shoes designed for speed and agility','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS36cKW_TCk_3kVKAgXD53qEMa3yYCERXQIQ&usqp=CAU'),(15,1,'Adidas Harden ',140,'Shoes designed for James Harden signature style','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Hpx8Y-yBoWI9tHynwM1-qT1P0IW7dyd4Lw&usqp=CAU'),(16,1,'Under Armour Curry 7',130,'Shoes designed for Stephen Curry fast-paced game','https://example.com/curry7.jpg'),(17,1,'Nike Kyrie 7 ',140,'Shoes designed for Kyrie Irving ball-handling skills','https://example.com/kyrie7.jpg'),(18,1,'Jordan Jumpman Team 1 ',140,'Classic shoes inspired by Michael Jordan','https://example.com/jordanteam1.jpg'),(19,1,'Nike KD 13 ',140,'Shoes designed for Kevin Durant versatility','https://example.com/kd13.jpg'),(20,1,'Adidas D.O.N. Issue #2',130,'Shoes designed for Damian Lillard quickness','https://example.com/donissue2.jpg'),(21,1,'Under Armour Project Rock 1',130,'Shoes designed with Dwayne \"The Rock\" Johnson','https://example.com/rock1.jpg'),(22,1,'Jordan Why Not Zer0.4 ',140,'Shoes designed for Russell Westbrook explosive style','https://example.com/whynotzer04.jpg'),(23,1,'Nike PG 4',130,'Shoes designed for Paul George all-around game','https://example.com/pg4.jpg'),(34,2,'ggd',34,'fsdffds','dfsafdsfs'),(35,2,'Kobe Lakers Jersey',120,'Kobe Bean Bryant ( August 23, 1978 – January 26, 2020) was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA). Widely regarded as one of the greatest basketball players and scorers of all time,[3][4][5][6][7][8] Bryant won five NBA championships, was an 18-time All-Star, a 15-time member of the All-NBA Team, a 12-time member of the All-Defensive Team,','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdww-XecMJxYxbOzYuZnOOf5M96wfsF56Lw&usqp=CAU'),(36,2,'Jordan Bulls Jersey',140,'An officially licensed replica of Michael Jordan Chicago Bulls jersey','https://dks.scene7.com/is/image/dkscdn/22MNNBNBBLLSYRDJRCHI_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1'),(37,2,'Magic Lakers Jersey',100,'An officially licensed replica of Magic Johnson Lakers jersey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkO9vaojtUxs4Eu5g67nJWOSGJyL-bo0otw&usqp=CAU'),(38,2,'Shaq Lakers Jersey',110,'An officially licensed replica of Shaquille ONeal Lakers jersey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzcSM0b-YnkPAGc46v3qNyAEPkRs_ZZUVsA&usqp=CAU'),(39,2,'Erving 76ers Jersey',130,'An officially licensed replica of Julius Erving Philadelphia 76ers jersey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkh1lytUC6ACez6Rngs-F_Fbs0jMYYJfc1ug&usqp=CAU'),(40,2,'Iverson 76ers Jersey',120,'An officially licensed replica of Allen Iverson Philadelphia 76ers jersey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbIFLOUbti4phz1183bC52NkazuljzyCwhGTBpoPTH4SPwy3owApAsZ6WNTWUPjdjt-M&usqp=CAU'),(41,2,'Olajuwon Rockets Jersey',120,'An officially licensed replica of Hakeem Olajuwon Houston Rockets jersey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxEdzuJCnLx78OeCq_vN902q9zbmbAz3_Ag&usqp=CAU'),(42,2,'Pippen Bulls Jersey',110,'An officially licensed replica of Scottie Pippen Chicago Bulls jersey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTIQUF1ni45Xec6am7W8cghiVufwZK2hh7ekqDlxP_XwiZOOpiG6hJqpyiAbeBoRoQCc&usqp=CAU'),(43,2,'Malone Jazz Jersey',110,'An officially licensed replica of Karl Malone Utah Jazz jersey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDf5w1Zlnq0VjAI8Wkg0z4wbEPzuUZgM-bFQ&usqp=CAU'),(44,4,'Basket 1',11,'A beautiful basket for all your storage needs','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEQp_cY0_ixSvi9AJ-kmp8qaclRLvCxP7qA&usqp=CAU'),(45,4,'Basket 2',13,'A sturdy basket for outdoor adventures','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTl4x3madIB7bfeTOgHk4jEniXWcZ-OQgjg&usqp=CAU'),(46,4,'Basket 3',16,'A stylish basket for home décor','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuIoVG4ZHwDBUXjLocwNM3P5Pa2mdYpYHhQ&usqp=CAU'),(47,4,'Basket 4',10,'A versatile basket for any room','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6pmKGcuA2oxkee0DfbjCtGmndjt6T9hoMQ&usqp=CAU'),(48,4,'Basket 5',12,'A lightweight basket for easy carrying','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQlwklesJE7k0hJXVs9aISXeXNpC3OVLwsQ&usqp=CAU'),(49,4,'Basket 6',14,'A durable basket for heavy-duty use','https://example.com/basket6.jpg'),(50,4,'Basket 7',9,'A compact basket for small spaces','https://example.com/basket7.jpg'),(51,4,'Basket 8',15,'A spacious basket for large items','https://example.com/basket8.jpg'),(52,4,'Basket 9',17,'A high-quality basket for long-lasting use','https://example.com/basket9.jpg'),(53,4,'Basket 10',13,'A beautiful basket for special occasions','https://example.com/basket10.jpg'),(54,3,'Basketball 1',20,'A high-performance basketball for the court','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E4z5IzvLxGmNvfpkvyXnhtntIQJPd_4z-A&usqp=CAU'),(55,3,'Basketball 2',23,'A durable basketball for outdoor play','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYO36ov7hrXg_jlmOJNXn8Wp-91UhOXdZbIquIqLJCOVg0jKqh&usqp=CAc'),(56,3,'Bbasketball 3',26,'A versatile basketball for all levels','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XGBZ-aCSd4o3dylONj6UkMtinTryTe6vKA&usqp=CAU'),(57,3,'Bbasketball 4',19,'A budget-friendly basketball for casual play','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsnb4xjPAyvyOSdoZd-77XnEOv_zdPB33Qw&usqp=CAU'),(58,3,'Basketball 5',22,'A lightweight basketball for easy handling','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuH1aKfYyMy2cO08_TyB404ggbrjiTdG95Lg&usqp=CAU'),(59,3,'Basketball 6',25,'A professional-grade basketball for serious play','https://example.com/basketball6.jpg'),(60,3,'Bbasketball 7',18,'A small-sized basketball for kids','https://example.com/basketball7.jpg'),(61,3,'Bbasketball 8',27,'A high-quality basketball for longevity','https://example.com/basketball8.jpg'),(62,3,'Basketball 9',24,'A mid-range basketball for regular play','https://example.com/basketball9.jpg'),(63,3,'Bbasketball 10',21,'A stylish basketball for a unique look','https://example.com/basketball10.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-02 15:50:10
