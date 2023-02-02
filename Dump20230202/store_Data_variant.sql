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
-- Table structure for table `variant`
--

DROP TABLE IF EXISTS `variant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `variant_name` varchar(40) DEFAULT NULL,
  `variant_size` varchar(20) DEFAULT NULL,
  `variant_color` varchar(40) DEFAULT NULL,
  `variant_quantity` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `variant_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variant`
--

LOCK TABLES `variant` WRITE;
/*!40000 ALTER TABLE `variant` DISABLE KEYS */;
INSERT INTO `variant` VALUES (1,34,'LeBron Lakers Jersey','m','blue',1),(2,34,'LeBron Lakers Jersey','s','blue',1),(3,34,'LeBron Lakers Jersey','l','yellow',1),(4,34,'LeBron Lakers Jersey','m','yellow',1),(5,35,'Kobe Lakers Jersey','s','yellow',4),(6,35,'Kobe Lakers Jersey','m','yellow',4),(7,35,'Kobe Lakers Jersey','l','yellow',4),(8,35,'Kobe Lakers Jersey','xl','yellow',4),(9,35,'Kobe Lakers Jersey','xxl','yellow',4),(10,35,'Kobe Lakers Jersey','s','blue',4),(11,35,'Kobe Lakers Jersey','l','blue',4),(12,35,'Kobe Lakers Jersey','s','black',4),(13,35,'Kobe Lakers Jersey','m','black',4),(14,35,'Kobe Lakers Jersey','l','black',4),(15,35,'Kobe Lakers Jersey','xl','black',4),(16,35,'Kobe Lakers Jersey','xxl','black',4),(17,36,'Kobe Lakers Jersey','s','yellow',4),(18,36,'Kobe Lakers Jersey','m','yellow',4),(19,36,'Kobe Lakers Jersey','l','yellow',4),(20,36,'Kobe Lakers Jersey','xl','yellow',4),(21,36,'Kobe Lakers Jersey','xxl','yellow',4),(22,36,'Kobe Lakers Jersey','s','blue',4),(23,36,'Kobe Lakers Jersey','l','blue',4),(24,36,'Kobe Lakers Jersey','s','black',4),(25,36,'Kobe Lakers Jersey','m','black',4),(26,36,'Kobe Lakers Jersey','l','black',4),(27,36,'Kobe Lakers Jersey','xl','black',4),(28,36,'Kobe Lakers Jersey','xxl','black',4),(29,37,'Kobe Lakers Jersey','s','yellow',4),(30,37,'Kobe Lakers Jersey','m','yellow',4),(31,37,'Kobe Lakers Jersey','l','yellow',4),(32,37,'Kobe Lakers Jersey','xl','yellow',4),(33,37,'Kobe Lakers Jersey','m','black',4),(34,37,'Kobe Lakers Jersey','l','black',4),(35,37,'Kobe Lakers Jersey','xl','black',4),(36,37,'Kobe Lakers Jersey','xxl','black',4),(37,38,'Kobe Lakers Jersey','s','yellow',4),(38,38,'Kobe Lakers Jersey','m','yellow',4),(39,38,'Kobe Lakers Jersey','l','yellow',4),(40,38,'Kobe Lakers Jersey','xl','yellow',4),(41,38,'Kobe Lakers Jersey','m','black',4),(42,38,'Kobe Lakers Jersey','l','black',4),(43,38,'Kobe Lakers Jersey','xl','black',4),(44,38,'Kobe Lakers Jersey','xxl','black',4),(45,39,'Kobe Lakers Jersey','s','yellow',4),(46,39,'Kobe Lakers Jersey','m','yellow',4),(47,39,'Kobe Lakers Jersey','l','yellow',4),(48,39,'Kobe Lakers Jersey','xl','yellow',4),(49,39,'Kobe Lakers Jersey','m','black',4),(50,39,'Kobe Lakers Jersey','l','black',4),(51,39,'Kobe Lakers Jersey','xl','black',4),(52,39,'Kobe Lakers Jersey','xxl','black',4),(53,40,'Kobe Lakers Jersey','s','yellow',4),(54,40,'Kobe Lakers Jersey','m','yellow',4),(55,40,'Kobe Lakers Jersey','l','yellow',4),(56,40,'Kobe Lakers Jersey','xl','yellow',4),(57,40,'Kobe Lakers Jersey','m','black',4),(58,40,'Kobe Lakers Jersey','l','black',4),(59,40,'Kobe Lakers Jersey','xl','black',4),(60,40,'Kobe Lakers Jersey','xxl','black',4),(61,41,'Kobe Lakers Jersey','s','yellow',4),(62,41,'Kobe Lakers Jersey','m','yellow',4),(63,41,'Kobe Lakers Jersey','l','yellow',4),(64,41,'Kobe Lakers Jersey','xl','yellow',4),(65,41,'Kobe Lakers Jersey','m','black',4),(66,41,'Kobe Lakers Jersey','l','black',4),(67,41,'Kobe Lakers Jersey','xl','black',4),(68,41,'Kobe Lakers Jersey','xxl','black',4),(69,1,'Kobe Lakers Jersey','34','brown',4),(70,1,'Kobe Lakers Jersey','35','brown',4),(71,1,'Kobe Lakers Jersey','36','brown',4),(72,1,'Kobe Lakers Jersey','37','brown',4),(73,1,'Kobe Lakers Jersey','38','brown',4),(74,1,'Kobe Lakers Jersey','43','brown',4),(75,1,'Kobe Lakers Jersey','44','brown',4),(76,1,'Kobe Lakers Jersey','45','brown',4),(77,3,'Kobe Lakers Jersey','34','white',4),(78,3,'Kobe Lakers Jersey','35','white',4),(79,3,'Kobe Lakers Jersey','36','white',4),(80,3,'Kobe Lakers Jersey','37','white',4),(81,3,'Kobe Lakers Jersey','38','white',4),(82,3,'Kobe Lakers Jersey','43','white',4),(83,3,'Kobe Lakers Jersey','44','white',4),(84,3,'Kobe Lakers Jersey','45','white',4),(85,44,'Kobe Lakers Jersey','10/5','white',4),(86,44,'Kobe Lakers Jersey','10/6','white',4),(87,44,'Kobe Lakers Jersey','10/7','white',4),(88,44,'Kobe Lakers Jersey','10/8','white',4),(89,44,'Kobe Lakers Jersey','10/9','white',4),(90,44,'Kobe Lakers Jersey','11/0','white',4),(91,44,'Kobe Lakers Jersey','11/1','white',4),(92,44,'Kobe Lakers Jersey','11/2','white',4),(93,45,'Kobe Lakers Jersey','10/5','white',4),(94,45,'Kobe Lakers Jersey','10/6','white',4),(95,45,'Kobe Lakers Jersey','10/7','white',4),(96,45,'Kobe Lakers Jersey','10/8','white',4),(97,45,'Kobe Lakers Jersey','10/9','white',4),(98,45,'Kobe Lakers Jersey','11/0','white',4),(99,45,'Kobe Lakers Jersey','11/1','white',4),(100,45,'Kobe Lakers Jersey','11/2','white',4),(101,46,'Kobe Lakers Jersey','10/5','white',4),(102,46,'Kobe Lakers Jersey','10/6','white',4),(103,46,'Kobe Lakers Jersey','10/7','white',4),(104,46,'Kobe Lakers Jersey','10/8','white',4),(105,46,'Kobe Lakers Jersey','10/9','white',4),(106,46,'Kobe Lakers Jersey','11/0','white',4),(107,46,'Kobe Lakers Jersey','11/1','white',4),(108,46,'Kobe Lakers Jersey','11/2','white',4),(109,54,'Kobe Lakers Jersey','5','white',4),(110,54,'Kobe Lakers Jersey','6','white',4),(111,54,'Kobe Lakers Jersey','7','white',4),(112,55,'Kobe Lakers Jersey','5','white',4),(113,55,'Kobe Lakers Jersey','6','white',4),(114,55,'Kobe Lakers Jersey','7','white',4),(115,56,'Kobe Lakers Jersey','5','white',4),(116,56,'Kobe Lakers Jersey','6','white',4),(117,56,'Kobe Lakers Jersey','7','white',4),(118,57,'Kobe Lakers Jersey','5','white',4),(119,57,'Kobe Lakers Jersey','6','white',4),(120,57,'Kobe Lakers Jersey','7','white',4),(121,54,'Kobe Lakers Jersey','5','brown',4),(122,54,'Kobe Lakers Jersey','6','brown',4),(123,54,'Kobe Lakers Jersey','7','brown',4),(124,55,'Kobe Lakers Jersey','5','green',4),(125,55,'Kobe Lakers Jersey','6','gren',4),(126,55,'Kobe Lakers Jersey','7','green',4);
/*!40000 ALTER TABLE `variant` ENABLE KEYS */;
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
