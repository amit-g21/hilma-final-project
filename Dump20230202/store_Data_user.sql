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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(40) DEFAULT NULL,
  `full_name` varchar(40) DEFAULT NULL,
  `phone_number` varchar(40) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'amitgo12','amit gonen','124134134','amitfe@gmail.com','1998-12-28','efraaim kishon 4 beer yakkov',1),(2,'ohad','ohad of','124134134','ohade@gmail.com','1998-12-28','efraaim kishon 4 beer yakkov',1),(3,'yotam','yotam of','124134134','yotam@gmail.com','1998-10-18','efraaim kishon 4 beer yakkov',0),(4,'hanoca','hanoca of','124134134','hanoca@gmail.com','1998-05-09','efraaim kishon 4 beer yakkov',0),(5,'adargo12','adar gonen','3242345235','adar@gmail.com','2023-01-12','efraim 3',NULL),(6,'adargo12','adar gonen','3242345235','adar@gmail.com','2023-01-12','efraim 3',NULL),(7,'adargo12','adar gonen','3242345235','adar@gmail.com','2023-01-12','efraim 3',NULL),(8,'adargo12','adar gonen','312312','adaer@hmail.com','2023-01-11','efraim ',NULL),(9,'adargo12','adar gonen','312312','adaer@hmail.com','2023-01-11','efraim ',NULL),(10,'shlomo12','shlomo kipnis','423524554','shlomo@gmail.com','2023-01-11','fewffsdf',NULL),(11,'shlomi13','sholomi armoza','34254554','shlomoar@gmail.com','1991-06-04','gedera',NULL),(12,'amir123','amir offenbach','34534655','amir@gmail.com','1971-05-13','kfar haim',NULL),(13,'ilay12','ilay rhavai','453645663','ilay@gmail.com','2023-02-16','jersulam',NULL),(14,'off','ohad','342434','dfsdgg@gmail.com','2023-02-24','fergergre fwef',NULL),(15,'ohad1212','ohad','3324234234','fsdvsdvf@gmail.com','3223-03-23','fewdfweffw',NULL),(16,'shlomo12','shlomo kipnis','455345242','shlomo12@gmail.com','2023-02-23','dasdfafd',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
