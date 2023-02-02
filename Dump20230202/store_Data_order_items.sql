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
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `products_quantity` int DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `card_number` varchar(20) DEFAULT NULL,
  `order_number` varchar(20) DEFAULT NULL,
  `full_name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,'2023-12-12',70,5,NULL,NULL,NULL,NULL),(2,'2023-12-12',70,5,'jerusalem','undefined',NULL,NULL),(3,'2023-02-02',0,0,'dsdadssda','3424234','8559','sdacdsc'),(4,'2023-02-02',0,0,'dsdadssda','3424234','2882','sdacdsc'),(5,'2023-02-02',0,0,'dsdadssda','3424234','227','sdacdsc'),(6,'2023-02-02',0,0,'dsdadssda','3424234','3494','sdacdsc'),(7,'2023-02-02',0,0,'dsdadssda','3424234','2087','sdacdsc'),(8,'2023-02-02',0,0,'dsdadssda','3424234','8212','sdacdsc'),(9,'2023-02-02',0,0,'dsdadssda','3424234','1208','sdacdsc'),(10,'2023-02-02',0,0,'dsdadssda','3424234','4337','sdacdsc'),(11,'2023-02-02',0,0,'dsdadssda','3424234','7430','sdacdsc'),(12,'2023-02-02',0,0,'dsdadssda','3424234','395','sdacdsc'),(13,'2023-02-02',0,0,'dsdadssda','3424234','7101','sdacdsc'),(14,'2023-02-02',0,0,'dsdadssda','3424234','79','sdacdsc'),(15,'2023-12-12',70,5,'jerusalem','undefined','undefined','undefined'),(16,'2023-12-12',70,5,'jerusalem','undefined','undefined','dfsfd'),(17,'2023-02-15',0,0,'fsdfds','342344','273','sfgsvdfs'),(18,'2023-02-15',0,0,'fsdfds','342344','3036','sfgsvdfs'),(19,'2023-02-15',0,0,'fsdfds','342344','4015','sfgsvdfs'),(20,'2023-02-15',0,0,'fsdfds','342344','6804','sfgsvdfs'),(21,'2023-02-15',0,0,'fsdfds','342344','1210','sfgsvdfs'),(22,'2023-02-15',0,0,'fsdfds','342344','5087','sfgsvdfs'),(23,'2023-02-15',0,0,'fsdfds','342344','4470','sfgsvdfs'),(24,'2023-02-15',0,0,'fsdfds','342344','4369','sfgsvdfs'),(25,'2023-02-15',0,0,'fsdfds','342344','2319','sfgsvdfs'),(26,'2023-02-15',0,0,'fsdfds','342344','1049','sfgsvdfs'),(27,'2023-02-13',0,0,'edqwdfs','342324','5783','wdqdwed'),(28,'2023-02-14',46,2,'csacsac','4234324','6831','dfsfdf'),(29,'2023-02-09',115,5,'fwdfgs','4323','9932','fwefwe'),(30,'2023-02-22',92,4,'dfwffwe','34243','7612','fgdsg'),(31,'2023-02-14',46,2,'fdsafds','2334334','8040','efdsfsdf'),(32,'2023-02-15',200,2,'ffsdaf','342432','4848','rqrerwe'),(33,'2023-02-14',373,5,'rishon','3432','7661','amit'),(34,'2023-02-15',260,3,'jeruslaem','54353534','6741','dfdsfdf'),(35,'2023-02-14',420,4,'rfsdgsg','45345','1135','rgsgrg');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
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
