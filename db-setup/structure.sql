-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: grupo_10
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
DROP DATABASE IF EXISTS grupo_10;
CREATE DATABASE grupo_10;
USE grupo_10;
--

--
-- Table structure for table `most_visited_products`
--

DROP TABLE IF EXISTS `most_visited_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `most_visited_products` (
  `id` varchar(36) NOT NULL unique DEFAULT (UUID()) COMMENT 'id llave primaria',
  `visits` INT NOT NULL DEFAULT 0,
  `product_id` varchar(36) NOT NULL unique COMMENT 'FK',
  PRIMARY KEY (`id`),
  KEY `most_visited_products_FK` (`product_id`),
  CONSTRAINT `most_visited_products_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `most_visited_productos`
--

LOCK TABLES `most_visited_products` WRITE;
/*!40000 ALTER TABLE `most_visited_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `most_visited_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(36) NOT NULL unique default (UUID()) COMMENT 'id PK',
  `name` varchar(50) NOT NULL COMMENT 'nombre del producto',
  `price` DECIMAL(10,2) NOT NULL COMMENT 'precio producto',
  `brand_id` varchar(36) NOT NULL,
  `description` varchar(300) COMMENT 'descripcion del producto',
  `category_id` varchar(36) NOT NULL,
  `image` varchar(255),
  PRIMARY KEY (`id`),
  KEY `products_FK` (`brand_id`),
  KEY `products_FK_1` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`brand_id`) REFERENCES `products_brand` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`category_id`) REFERENCES `products_category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_brand`
--

DROP TABLE IF EXISTS `products_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_brand` (
  `id` varchar(36) NOT NULL unique default (UUID()) COMMENT 'llave primaria',
  `name` varchar(50) NOT NULL COMMENT 'FK',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_brand`
--

LOCK TABLES `products_brand` WRITE;
/*!40000 ALTER TABLE `products_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_category`
--

DROP TABLE IF EXISTS `products_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_category` (
  `id` varchar(36) NOT NULL unique default (UUID()) COMMENT 'id llave primaria',
  `name` varchar(50) NOT NULL UNIQUE COMMENT 'FK',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_category`
--

LOCK TABLES `products_category` WRITE;
/*!40000 ALTER TABLE `products_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` VARCHAR(36) NOT NULL unique default (UUID()) COMMENT 'Id unico de la tabla ',
  `first_name` varchar(50) NOT NULL COMMENT 'Primer nombre del usuaria',
  `last_name` varchar(50) NOT NULL COMMENT 'Apellido del usuario',
  `email` varchar(50) NOT NULL unique COMMENT 'Email del usuario',
  `password` varchar(100) NOT NULL COMMENT 'contrasena del usuario',
  `avatar` varchar(255) NOT NULL COMMENT 'avatar del usuario',
  `category_id` varchar(36) NOT NULL COMMENT 'FK',
  PRIMARY KEY (`id`),
  KEY `users_FK` (`category_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`category_id`) REFERENCES `users_category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tabla con todos los datos de los usuarios del sistema';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_category`
--

DROP TABLE IF EXISTS `users_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_category` (
  `id` varchar(36) NOT NULL unique default (UUID()) COMMENT 'columna con el dato para la llave foranea',
  `name` varchar(100) NOT NULL unique COMMENT 'nombre de la categoria de usuarios',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_category`
--

LOCK TABLES `users_category` WRITE;
/*!40000 ALTER TABLE `users_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo_10'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-04 11:08:01
